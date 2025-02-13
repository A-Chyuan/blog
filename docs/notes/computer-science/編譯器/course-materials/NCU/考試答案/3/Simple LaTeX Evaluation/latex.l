%option noyywrap
%option never-interactive
%{
	#include "latex.tab.h"
%}

fnum	[0-9]+(\.[0-9]+)?
opr		[+\-\^\(\)]
frac	"\\frac"
spc		[ \t]

%%

{fnum} {
	yylval.ival = atof(yytext);
	return INUMBER;
}
{opr}	{ return yytext[0]; }
{frac}	{ return frac; }
{spc}	{ ; }
\n		{ return 0; }
.		{ return yytext[0]; }

%%
