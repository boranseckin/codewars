#include <stdlib.h>
#include <stddef.h>
#include <string.h>
#include <stdio.h>

char* likes(size_t n, const char *const names[n]) {
    char* result = malloc(50);
    
    if (n < 1) {
        sprintf(result, "no one likes this");
    }
    else if (n == 1) {
        sprintf(result, "%s likes this", names[0]);
    }
    else if (n == 2) {
        sprintf(result, "%s and %s like this", names[0], names[1]);
    }
    else if (n == 3) {
        sprintf(result, "%s, %s and %s like this", names[0], names[1], names[2]);
    }  
    else if (n >= 4) {
        sprintf(result, "%s, %s and %lu others like this", names[0], names[1], (n - 2));
    }
  
    return result;
}
