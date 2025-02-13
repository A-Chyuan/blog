clear

filename="latex"
rm -f $filename
rm -f *.yy.*
rm -f *.tab.*
rm -f *.o*

bison -v -d -o $filename.tab.c $filename.y
flex -o $filename.yy.c $filename.l
gcc -lm -c -g -I.. $filename.tab.c
gcc -lm -c -g -I.. $filename.yy.c
gcc -lm -o $filename $filename.tab.o $filename.yy.o

./$filename <<< "\frac{1}{2}^3"
