%{
	int charCount = 0,
	wordCount = 0,
	lineCount = 0;
%}

word	[^ \t\n]+
eol		\n

%%

{word}	{
	wordCount++;
	charCount += yyleng;
}

{eol}	{
	charCount++;
	lineCount++;
}

.	charCount++;

%%

int main() {
	yylex();
	printf("%u %u %u\n", charCount, wordCount, lineCount);
}
