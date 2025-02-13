%{
#include <stdio.h>
#include <string.h>
void yyerror();
int yylex();
%}
%union{
    char   cval;
    int    ival;
    struct{
        int row;    
        int col;
    }mval; 
}

%start line
%token <ival> NUM
%token <cval> TRANS
%type  <mval> mexpr
%type  <mval> expr

%left '+' '-'
%left '*'
%left TRANS

%%
line :  expr '\n'      {printf("Accepted\n");}
     ;
     
expr :  expr '+' expr           {if($1.col != $3.col || $1.row != $3.row){Error(&@2);YYERROR;}$$.row = $1.row ; $$.col = $1.col ;}
     |  expr '-' expr           {if($1.col != $3.col || $1.row != $3.row){Error(&@2);YYERROR;}$$.row = $1.row ; $$.col = $1.col ;}
     |  expr '*' expr           {if($1.col != $3.row){Error(&@2);YYERROR;}$$.row = $1.row;$$.col = $3.col;}
     |  mexpr
     ;

mexpr : '[' NUM ',' NUM ']'    {$$.row=2;$.col=$4;}
      |  mexpr TRANS           {$$.row = $1.col ; $$.col = $1.row;}
      | '(' expr ')'           {$$ = $2;}
      ;

%%
void yyerror ()
{
    //fprintf(stdout,"Semantic error on col %d\n",yylloc.first_column);
    return;
}
int main(int argc, char** argv){
    yyparse();
    return(0);
}