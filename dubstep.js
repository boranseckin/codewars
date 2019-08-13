function songDecoder(song){
    let array = song.split('');
    
    for (i = 0; i < array.length; i += 1) {
      if (array[i] === 'W') {
        if (array[i + 1] === 'U') {
          if (array[i + 2] === 'B') {
            array.splice(i, 3);
            if (array[i - 1] !== ' ') {
              array.splice(i, 0, ' ');
            }
            i -= 1;
          }
        }
      }
    }
    
    if (array[0] === ' ') {
      array.shift();
    }
    if (array[array.length - 1] === ' ') {
      array.pop();
    }
  
    return array.join('');
}
