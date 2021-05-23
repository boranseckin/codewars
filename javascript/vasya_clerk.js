function tickets(peopleInLine) {
    let length = peopleInLine.length;
    let vaultArray = [];
    let vault = 0;
    
    for (i = 0; i < length; i += 1) {
      switch (peopleInLine[i]) {
      case 25:
        vault += 25;
        vaultArray.push(25);
        break;
      case 50:
        if (vault >= 25 && vaultArray.includes(25)) {
          vault += 50;
          vault -= 25;
          vaultArray.push(50);
          vaultArray.splice(vaultArray.indexOf(25), 1);
        } else {
          return "NO";
        }
        break;
      case 100:
        if (vault >= 75) {
          if (vaultArray.includes(50) && vaultArray.includes(25)) {
            vault += 100;
            vault -= 25;
            vaultArray.push(100);
            vaultArray.splice(vaultArray.indexOf(25), 1);
            vaultArray.splice(vaultArray.indexOf(50), 1);
          } else if (vaultArray.filter(number => number === 25).length >= 3) {
            vault += 100;
            vault -= 25;
            vaultArray.push(100);
            vaultArray.splice(vaultArray.indexOf(25), 1);
            vaultArray.splice(vaultArray.indexOf(25), 1);
            vaultArray.splice(vaultArray.indexOf(25), 1);
          } else {
            return "NO";
          }
        } else {
          return "NO";
        }
        break;
      }
    }
    return "YES";
}
