%{
    #include "Prob6A-2.tab.h"

    extern YYLTYPE yylloc;
    #define YY_USER_ACTION yylloc.first_column = sourceCol; yylloc.last_column = sourceCol+yyleng-1; \
    sourceCol += yyleng;

    int sourceCol = 0;
    extern void Error(YYLTYPE *bloc) {
        fprintf(stdout,"Semantic error on col %d\n",bloc->last_column+1);
    }
%}

%%
\n                  {return(yytext[0]);}
[ \t]+              {}
"^T"                {return(TRANS);}
[0-9]+              {yylval.ival = atoi(yytext);return(NUM);}
"+"|"-"|"*"         {return(yytext[0]);}
\[|\]|","           {return(yytext[0]);}
.                   {return(yytext[0]);}
%%