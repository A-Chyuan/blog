%{
#include "a.tab.h"
%}

%%
[0-9]+		{ yylval = atoi(yytext); return NUMBER;}
add			{ return ADD; }
sub			{ return SUB; }
mul			{ return MUL; }
mod			{ return MOD; }
inc			{ return INC; }
dec			{ return DEC; }
load		{ return LOAD; }
\n			{}
.			{}
%%
