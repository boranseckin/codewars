// return masked string
function maskify(cc) {
    let output = "";
    let last_four = cc.slice(-4);
    let length = cc.length;
    
    if (length <= 4) {
      output = cc;
    } else {
      output = last_four;
      for (i = 0; i < length - 4; i += 1) {
         output = "#" + output;
      }
    }
    
    return(output);
}
