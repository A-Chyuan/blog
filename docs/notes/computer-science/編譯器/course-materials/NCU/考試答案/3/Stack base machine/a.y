%{
#include <stdio.h>
#define YYSTYPE int
int yylex();
int ans;
void yyerror(const char* message){
	ans = -2147483647;
	printf("Invalid format\n");
};
%}
%token NUMBER ADD SUB MUL MOD LOAD INC DEC
%%
startsymbol
	: instruction {
		ans = $1;
	}
	;

instruction
	: instruction instruction ADD {
		//printf("R add");
		$$ = $2 + $1;
	}
	| instruction instruction SUB {
		//printf("R sub");
		$$ = $2 - $1;
	}
	| instruction instruction MUL {
		//printf("R mul");
		$$ = $2 * $1;
	}
	| instruction instruction MOD {
		//printf("R mod");
		$$ = $2 % $1;
	}
	| instruction INC {
		//printf("R inc");
		$$ = $1 + 1;
	}
	| instruction DEC {
		//printf("R dec");
		$$ = $1 - 1;
	}
	| LOAD NUMBER {
		$$ = $2;
	}
	;
%%

int main()
{
	yyparse();
	if(ans != -2147483647){
		printf("%d\n", ans);
	}
	return 0;
}
