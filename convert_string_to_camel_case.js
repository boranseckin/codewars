function toCamelCase(str){
    let result = '';
    let split = str.split('');
    for (let i = 0; i < split.length; i += 1) {
      if (split[i] == '-' || split[i] == '_') {
        result += split[i + 1].toUpperCase();
        i += 1;
      } else {
        result += split[i];
      }
    }
    return result;
}
