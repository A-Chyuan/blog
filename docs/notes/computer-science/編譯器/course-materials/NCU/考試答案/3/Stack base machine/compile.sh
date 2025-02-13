#!/bin/bash
filename="stack"
clear
rm -f lex.yy.c
rm -f $filename
flex -o lex.yy.c $filename.l
gcc -std=c99 -o $filename lex.yy.c

./$filename <<< "load 1
inc
inc
dec
load 3
inc
inc
mul
load 4
dec
dec
mul
inc"
