%option noyywrap
eee     ^[+|-]?[1-9](\.[0-9]+)*[e|E][+|-]?[0-9]+$
word    [^\n]
eol     \n

%%
{eee}   { printf("%s\n",yytext); }
{word}  {}
{eol}   {}
%%
#include <stdio.h>
#include <stdlib.h>
int main(int argc, char *argv[]) {
        yylex();
        return(0);
}
