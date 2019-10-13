function decipherThis(text) {
    let result = '';
    text = text.split(" ");
    text.forEach(element => {
        let charOffset;

        for(let i = 0; i < element.length; i += 1) {
            if(isNaN(element[i])) {
                charOffset = i;
                break;
            }
            charOffset = element.length;
        }

        const letter = String.fromCharCode(element.slice(0, charOffset));
        const fullChar = letter.concat(element.slice(charOffset))
        
        const array = fullChar.split('');
        [ array[1], array[array.length - 1] ] = [ array[array.length - 1], array[1] ];
        const string = array.join('');

        result = result.concat(string, ' ');
    });
    return result.slice(0, -1);
}
