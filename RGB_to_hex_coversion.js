function rgb(r, g, b) {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let result = '';

    let numbers = [r, g, b];

    numbers.forEach((number) => {
        number = number < 0 ? 0 : number;
        number = number > 255 ? 255 : number;
    
        let first = Math.floor(number / 16);
        let second = number - (first * 16);
    
        result = result.concat(hex[first], hex[second])
    });

    return result;
}