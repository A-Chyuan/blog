#include <iostream>
#include <string>
#include <exception>
#include <stdexcept>
#include <queue>
#include <sstream>
#include <cstdlib>
#include <cctype>

using namespace std;

enum TOKENTYPE { UNKNOWN, OPERATOR, OPERAND, LINEEND, ILLEGAL } ;
bool gExit = false ;

class Token {
 public :
  Token( string s, int t, int c )
    : _content( s ), _type( t ), _col( c ) {
  } // Token()

  string ToString() {
    stringstream ss ;
    ss << _content << " " ;
    switch ( _type ) {
    case OPERATOR :
      ss << "operator" << " " ;
      break ;
    case OPERAND :
      ss << "operand" << " " ;
      break ;
    } // switch

    ss << "@" << _col ;

    return ss.str() ;
  } // ToString()

  string str() {
    return _content ;
  }
  void str( string newStr ) {
    _content = newStr ;
  }
  int type() {
    return _type ;
  }
  void type( int newType ) {
    _type = newType ;
  }
  int col() {
    return _col ;
  }
 private :
  string _content ;
  int _type, _col ;
};

class Scanner {
 public :
  Token NextToken() {
    string buffer ;
    int cType = UNKNOWN ;
    bool success = false ;

    while ( !success ) {
      char cbuf = Getchar() ;
      if ( cType == UNKNOWN ) {
        if ( isspace( cbuf ) || cbuf == -1 ) {
          if ( cbuf == '\n' || cbuf == -1 ) {
            cType = LINEEND ;
            Reset() ;
            success = true ;
          } // if
        } // if
        else {
          buffer += cbuf ;
          if( cbuf == '+' || cbuf == '-' ) {
            cType = OPERATOR ;
          } // if
          else if ( cbuf == '*' || cbuf == '/' ) {
            cType = OPERATOR ;
            success = true ;
          } // else if ()
          else if ( isdigit( cbuf ) ) {
            cType = OPERAND ;
          } // else if
          else {
            cType = ILLEGAL ;
          } // else
        } // else
      } // if
      else if ( cType == OPERATOR ) {
        if ( isdigit( cbuf ) ) {
          buffer += cbuf ;
          cType = OPERAND ;
        } // if
        else {
          Putback( cbuf ) ;
          success = true ;
        } // else
      } // else if
      else if ( cType == OPERAND ) {
        if( IsOperator( cbuf ) ) {
          Putback( cbuf ) ;
          success = true ;
        } // if
        else if( isdigit( cbuf ) ) {
          buffer += cbuf ;
        } // if
        else if ( isspace( cbuf ) || cbuf == -1 ) {
          Putback( cbuf ) ;
          success = true ;
        } // else if
        else {
          buffer += cbuf ;
          cType = ILLEGAL ;
        } // else
      } // else if
      else if ( cType == ILLEGAL ) {
        if( isspace( cbuf ) || cbuf == -1 ) {
          string msg = "Error: Unknown token " + buffer ;
          if ( cbuf != '\n' )
            getline( cin, buffer ) ;
          column = 0 ;
          throw logic_error( msg ) ;
        } // if
        else {
          buffer += cbuf ;
        } // else
      } // else if
    } // while

    return Token( buffer, cType, column - buffer.size() + 1 ) ;
  } // NextToken()
 private :
  int column ;

  char Getchar() {
    char c = cin.get() ;
    if ( c != -1 ) {
      ++column ;
    } // if
    else {
      gExit = true ;
    } // else

    return c ;
  } // GetChar()

  void Putback( char c ) {
    cin.putback( c ) ;
    --column ;
    return ;
  } // Putback()

  bool IsOperator( char c ) {
    if ( c == '+' || c == '-' || c == '*' || c == '/' )
      return true ;
    else
      return false ;
  } // IsOperator()

  void Reset() {
    column = 0 ;
  } // Reset()
};

Scanner gSc ;

void ReadFormula( queue<Token> & thisLine ) {
  Token t = gSc.NextToken() ;
  while ( t.type() != LINEEND ) {
    thisLine.push( t ) ;
    t = gSc.NextToken() ;
  } // while

  return ;
} // ReadFormula()

int EvalFormula( queue<Token> & thisLine, int level ) {
  if ( thisLine.empty() )
    throw logic_error( "Error: Illegal formula!" ) ;

  Token t = thisLine.front() ;
  int result = 0 ;

  thisLine.pop() ;

  if ( t.type() == OPERATOR ) {
    int o1 = EvalFormula( thisLine, level + 1 ) ;
    int o2 = EvalFormula( thisLine, level + 1 ) ;

    switch ( t.str()[ 0 ] ) {
    case '+' :
      result = o1 + o2 ;
      break ;
    case '-' :
      result = o1 - o2 ;
      break ;
    case '*' :
      result = o1 * o2 ;
      break ;
    case '/' :
      if ( o2 == 0 )
        throw logic_error( "Error: Divide by ZERO!" ) ;
      result = o1 / o2 ;
      break ;
    } // switch
  } // if
  else {
    if ( level == 0 && !thisLine.empty() )
      throw logic_error( "Error: Illegal formula!" ) ;
    return atoi( t.str().c_str() ) ;
  } // else

  if ( level == 0 && !thisLine.empty() )
    throw logic_error( "Error: Illegal formula!" ) ;

  return result ;
} // EvalFormula()

int main(int argc, const char * argv[]) {
  queue<Token> tokensInLine ;

  cout << "Welcome use our calculator!" << endl ;
  while ( !gExit ) {
    cout << "> " ;
    try {
      ReadFormula( tokensInLine ) ;
      if ( !tokensInLine.empty() ) {
        cout << EvalFormula( tokensInLine, 0 ) << endl ;
      } // if


    } catch ( exception & e ) {
      cout << e.what() << endl ;
      while ( !tokensInLine.empty() ) {
        tokensInLine.pop() ;
      } // for
    } // catch
  } // while

  cout << "ByeBye~" << endl ;
  return 0;
} // main()
