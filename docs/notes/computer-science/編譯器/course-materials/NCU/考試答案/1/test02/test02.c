#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TOKEN_LEVEL 0
#define TOKEN_FIRSTNAME 1
#define TOKEN_LASTNAME 2
#define TOKEN_CID 3
#define TOKEN_BATTLE 4
#define TOKEN_UNKNOW 5

void Proc();
void Dcl();
void Stmt();
void Id();
void error();

struct AST_NODE {
	char content[100];
	int token_type;
} ast_node[100];

int N, ind = 0, invalid = 0;

struct AST_NODE peek() {
	return ast_node[ind++];
}

void Proc() {
	Dcl();
	if (!invalid)
		Stmt();
}

void Dcl() {
	if (peek().token_type == TOKEN_LEVEL) {
		Id();
	} else {
		error();
	}
}

void Stmt() {
	struct AST_NODE node = peek();
	if (node.token_type == TOKEN_BATTLE) {
		Id();
	} else {
		error();
	}
}

void Id() {
	struct AST_NODE node = peek();
	if (node.token_type == TOKEN_CID) {
		//do nothing, ya!!!!!!!!!!
	} else if (node.token_type == TOKEN_FIRSTNAME
			&& peek().token_type == TOKEN_LASTNAME) {
		//do nothing, ya!!!!!!!!!!
	} else {
		error();
	}
}

void error() {
	invalid = 1;
	printf("invalid input\n");
}

int is_level(char *inp) {
	int i;
	if (strlen(inp) < 2)
		return 0;
	if (inp[0] != 'l')
		return 0;
	for (i = 1; i < strlen(inp); i++) {
		if (!(inp[i] >= '0' && inp[i] <= '9')) {
			return 0;
		}
	}
	return 1;
}

int is_firstName(char *inp) {
	int i;
	if (strlen(inp) < 1)
		return 0;
	if (!(inp[0] >= 'A' && inp[0] <= 'Z'))
		return 0;
	for (i = 1; i < strlen(inp); i++) {
		if (!(inp[i] >= 'a' && inp[i] <= 'z')) {
			return 0;
		}
	}
	return 1;
}

int is_lastName(char *inp) {
	int i;
	if (strlen(inp) < 1)
		return 0;
	for (i = 0; i < strlen(inp); i++) {
		if (!(inp[i] == 'a' || (inp[i] >= 'c' && inp[i] <= 'z'))) {
			return 0;
		}
	}
	return 1;
}

int is_cid(char *inp) {
	int i;
	for (i = 0; i < strlen(inp); i++) {
		if (inp[i] < '0' || inp[i] > '9')
			return 0;
	}
	return 1;
}

int is_battle(char *inp) {
	return (strlen(inp) == 1 && inp[0] == 'b');
}

int main(void) {
	char inp[100];
	for (N = 0; ~scanf("%s", inp); N++) {
		strcpy(ast_node[N].content, inp);
		if (is_level(inp)) {
			ast_node[N].token_type = TOKEN_LEVEL;
		} else if (is_firstName(inp)) {
			ast_node[N].token_type = TOKEN_FIRSTNAME;
		} else if (is_lastName(inp)) {
			ast_node[N].token_type = TOKEN_LASTNAME;
		} else if (is_cid(inp)) {
			ast_node[N].token_type = TOKEN_CID;
		} else if (is_battle(inp)) {
			ast_node[N].token_type = TOKEN_BATTLE;
		} else {
			ast_node[N].token_type = TOKEN_UNKNOW;
		}
	}

	Proc();
	if (!invalid) {
		char str[5][10];
		strcpy(str[TOKEN_LEVEL], "level");
		strcpy(str[TOKEN_FIRSTNAME], "FirstName");
		strcpy(str[TOKEN_LASTNAME], "LastName");
		strcpy(str[TOKEN_CID], "cid");
		strcpy(str[TOKEN_BATTLE], "battle");
		int i = 0;
		for (i = 0; i < N; i++) {
			printf("%s %s\n", str[ast_node[i].token_type], ast_node[i].content);
		}
	}
	return 0;
}
