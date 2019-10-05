function balance(left, right) {
    let balance = 0;
    const leftChar = left.split('');
    const rightChar = right.split('');
    for (let i = 0; i < leftChar.length; i += 1) {
        if (leftChar[i] === '!') {
            balance -= 2;
        } else {
            balance -= 3;
        }
    }
    for (let i = 0; i < rightChar.length; i += 1) {
        if (rightChar[i] === '!') {
            balance += 2;
        } else {
            balance += 3;
        }
    }
    if (balance < 0) {
        return 'Left';
    } else if (balance > 0) {
        return 'Right';
    } else {
        return 'Balance';
    }
}
