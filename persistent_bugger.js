function persistence(num) {
    let sNum = num.toString();
    let step = 0;
    
    do {
      let multiple = 1;
      for (i = 0; i < sNum.length; i += 1) {
        multiple *= sNum.charAt(i);
      }
      sNum = multiple.toString();
      step += 1;
    }
    while (sNum.length > 1);
    
    return (num.toString().length === 1) ? 0 : step;
}
