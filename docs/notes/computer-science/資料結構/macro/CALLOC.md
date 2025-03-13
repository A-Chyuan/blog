```c
#define CALLOC(p, n, s) \
    if (!((p) = calloc(n, s))) { \
        fprintf(stderr, "Insufficient memory"); \
        exit(EXIT_FAILURE); \
    }
```
