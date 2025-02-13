#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TOKEN_ID 0
#define TOKEN_ASSIGN 1
#define TOKEN_INUM 2
#define TOKEN_UNKNOW 3

int is_id(char *);
int is_assign(char *);
int is_inum(char *);
void Proc();
void Val();
void ta_is_handsome();
void token_mismatch();
void grammar_mismatch();

struct AST_NODE {
	char content[100];
	int token_type;
} ast_node[100];

int N = 0, ind = 0, token_valided = 1, grammar_valided = 1;

struct AST_NODE peek() {
	return ast_node[ind++];
}

int is_id(char *inp) {
	if (strlen(inp) > 1)
		return 0;
	if (inp[0] > 'z' || inp[0] < 'a')
		return 0;
	return 1;
}

int is_assign(char *inp) {
	if (inp[0] == '=')
		return 1;
	else
		return 0;
}

int is_inum(char *inp) {
	int i = 0;
	for (i = 0; i < strlen(inp); i++) {
		if (inp[i] > '9' || inp[i] < '0')
			return 0;
	}
	return 1;
}

void Proc() {
	if(!grammar_valided)
		return ;
	Val();
}

void Val() {
	if(!grammar_valided)
		return ;
	int type = peek().token_type;
	if (type == TOKEN_ID) {
		type = peek().token_type;
		if (type == TOKEN_ASSIGN) {
			Val();
		} else {
			grammar_valided = 0;
		}
	} else if (type == TOKEN_INUM) {
		if (ind == N) {
			// grammar accepted (ta is handsome), ya!!!!!
		} else {
			grammar_valided = 0;
		}
	} else {
		grammar_valided = 0;
	}
}

void ta_is_handsome() {
	printf("TA is handsome.\n");
}

void token_mismatch() {
	printf("Token mismatch.\n");
}

void grammar_mismatch() {
	printf("Grammar mismatch.\n");
}

int main(void) {
	char tmp[100];
	for (N = 0; ~scanf("%s", tmp); N++) {
		strcpy(ast_node[N].content, tmp);
		if (is_id(tmp)) {
			ast_node[N].token_type = TOKEN_ID;
		} else if (is_inum(tmp)) {
			ast_node[N].token_type = TOKEN_INUM;
		} else if (is_assign(tmp)) {
			ast_node[N].token_type = TOKEN_ASSIGN;
		} else { // TOKEN_UNKNOW
			token_valided = 0;
		}
	}
	if (token_valided) {
		Proc();
		if (grammar_valided) {
			ta_is_handsome();
		} else {
			grammar_mismatch();
		}
	} else {
		token_mismatch();
	}
	return 0;
}
