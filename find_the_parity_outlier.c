#include <stdlib.h>

int find_outlier(const int *values, size_t count) {  
    int odd = 0;
    int even = 0;
    
    int odd_count = 0;
    
    for (size_t i = 0; i < count; i++) {
        if (*(values + i) % 2 == 0) {
            even += *(values + i);
        } else {
            odd += *(values + i);
            odd_count++;
        }
    }
    
    return (odd_count == 1) ? odd : even;
}