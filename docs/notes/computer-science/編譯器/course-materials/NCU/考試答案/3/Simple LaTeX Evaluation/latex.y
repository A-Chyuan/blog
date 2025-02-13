%{
	#include <stdio.h>
	#include <math.h>
	void yyerror(const char *message);
%}
%union {
	float ival;
}

%token <ival> INUMBER
%token <ival> frac
%type <ival> expr
%left '+' '-'
%left '^'

%%

line: expr			{ printf("%.3f\n", $1); }
;

expr: expr '+' expr				{ $$ = $1 + $3; }
	| expr '-' expr				{ $$ = $1 - $3; }
	| expr '^' INUMBER			{ $$ = pow($1, $3); }
	| expr '^' '{' expr '}'		{ $$ = pow($1, $4); }
	| frac '{' expr '}' '{' expr '}'	{ $$ = $3 / $6; }
	| INUMBER					{ $$ = $1; }
;


%%

void yyerror (const char *message)
{
	fprintf (stderr, "%s\n", message);
}

int main(int argc, char *argv[]) {
	yyparse();
	return(0);
}
