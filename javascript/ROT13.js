function rot13(str) {
    const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

    str = str.split('').map((letter) => {        
        if (output.indexOf(letter) >= 0) {
            return input[output.indexOf(letter)];
        }
        return letter;
    });
    
    return str.join('');
}
