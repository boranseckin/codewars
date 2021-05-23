#include <stdbool.h>
#include <stdio.h>
#include <math.h>

bool narcissistic(int num)
{
    int sum = 0;
    int len = floor(log10(num)) + 1;    // https://stackoverflow.com/a/3068420/10161292
      
    for (int i = 0; i < len; i++) {
        int n = num / (int) pow(10, i);
        sum += (int) pow((n % 10), len);
    }

    return (num == sum);
}