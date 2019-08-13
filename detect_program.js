function isPangram(string) {
    const alphabet = /^[A-Za-z]+$/;
    let strArray = (string).split("");
    let newArray = [];
  
    for (i = 0; i < strArray.length; i += 1) {
      if (newArray.indexOf(strArray[i].toLowerCase()) === -1 && strArray[i].match(alphabet)) {
        newArray.push(strArray[i].toLowerCase());
      }
    }
  
    return (newArray.length === 26) ? true : false;
  
}