// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/c

int persistence(int n) {
    if ((n / 10) < 1)
        return 0;
    
    int i = 0;
  
    while (n > 9) {
        int next = 1;
        while(n > 0) {
            next *= (n % 10);
            n /= 10;
        }
        n = next;
        i++;
    }

    return i;
}