function expandedForm(num) {
    let numArray = num.toString().split("");
    let result = '';
  
    for (i = 0; i < numArray.length; i += 1) {
      if (numArray[i] > 0) {
        result += numArray[i] * Math.pow(10, numArray.length - i - 1);
        result += ' + ';
      }
    }
    result = result.substr(0, result.length-3);
    return result;
}
