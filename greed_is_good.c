int score(const int dice[5]) {
    int point = 0;
    int count[] = {0, 0, 0, 0, 0, 0};
    
    for (int i = 0; i < 5; i++)
        count[dice[i] - 1]++;
    
    if (count[0] >= 3) {
        point += 1000;
        count[0] -= 3;
    }
    if (count[5] >= 3) {
        point += 600;
        count[5] -= 3;
    }
    if (count[4] >= 3) {
        point += 500;
        count[4] -= 3;
    }
    if (count[3] >= 3) {
        point += 400;
        count[3] -= 3;
    }
    if (count[2] >= 3) {
        point += 300;
        count[2] -= 3;
    }
    if (count[1] >= 3) {
        point += 200;
        count[1] -= 3;
    }
    
    point += (count[0] * 100) + (count[4] * 50);
    
    return point;
}