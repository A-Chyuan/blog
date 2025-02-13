%option noyywrap
%option never-interactive
%{
	#include <stdio.h>
	int ind = 0, error = 0;
	int stack[100];
%}
load	"load "
num		[0-9]+
add		"add"
sub		"sub"
mul		"mul"
mod		"mod"
inc		"inc"
dec		"dec"

%%

{load}{num}	{
	char tmp[100];
	sscanf(yytext, "%s %d", tmp, &stack[ind++]);
}
{add}	{
	if(ind >= 2) {
		stack[ind-2] = stack[ind - 1] + stack[ind - 2];
		ind--;
	} else {
		error = 1;
	}
}
{sub}	{
	if(ind >= 2) {
		stack[ind-2] = stack[ind - 1] - stack[ind - 2];
		ind--;
	} else {
		error = 1;
	}
}
{mul}	{
	if(ind >= 2) {
		stack[ind-2] = stack[ind - 1] * stack[ind - 2];
		ind--;
	} else {
		error = 1;
	}
}
{mod}	{
	if(ind >= 2) {
		stack[ind-2] = stack[ind - 1] % stack[ind - 2];
		ind--;
	} else {
		error = 1;
	}
}
{inc}	{
	if(ind > 0)
		stack[ind-1]++;
}
{dec}	{
	if(ind > 0)
		stack[ind-1]--;
}
\n		{}
.		{}

%%

int main(int argc, char *argv[]) {
	yylex();
	if(error || ind != 1) {
		printf("Invalid format\n");
	} else {
		printf("%d\n", stack[0]);
	}
	return(0);
}
