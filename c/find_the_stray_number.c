#include <stddef.h>

int stray(size_t n, int arr[n]) {
    if (arr[0] != arr[1] && arr[0] != arr[2])
        return arr[0];
    
    for (size_t i = 0; i < n; i++) {
        if (arr[i] != arr[0])
            return arr[i];
    }
}