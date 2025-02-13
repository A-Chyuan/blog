#!/bin/bash
flex -o lex.yy.c mEn.l
gcc -o mEn lex.yy.c
./mEn < 1.in > 1.out
./mEn < 2.in > 2.out
./mEn < 3.in > 3.out
./mEn < 4.in > 4.out
