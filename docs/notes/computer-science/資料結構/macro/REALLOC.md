```c
#define REALLOC(p, s) \
    if (!((p) = realloc(p, s))) { \
        fprintf(stderr, "Insufficient memory"); \
        exit(EXIT_FAILURE); \
    }
```
