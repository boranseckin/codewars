function openOrSenior(data){
    let length = data.length;
    let result = [];
    
    for (i = 0; i < data.length; i += 1) {
      if (data[i][0] >= 55) {
        if (data[i][1] > 7 && data[i][1] < 26) {
          result.push("Senior");
        } else {
          result.push("Open");
        }
      } else {
        result.push("Open");
      }
    }
    
    return result;
}
