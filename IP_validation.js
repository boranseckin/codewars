function isValidIP(str) {
    console.log(str);
    const octets = str.split(".");
  
    if (octets.length !== 4) return false;
    
    for (let i = 0; i < 4; i += 1) {
        console.log(octets[i]);
        if (isNaN(octets[i])) return false; // Not a number
        if (octets[i].length === 1 && Number(octets[i]) === 0) continue; // Make an exception for '0'
        if (Number(octets[i]) < 0 || Number(octets[i]) > 255) return false; // Not an octet
        if (Number(octets[i]) > (10 ** octets[i].length) - 1) return false; // Greater than it should be
        if (Number(octets[i]) < (10 ** octets[i].length) / 10) return false; // Less than it should be
    };

    return true;
}
