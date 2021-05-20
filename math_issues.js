Math.round = function(number) {
    const parts = number.toString().split('.');
    if (parts[1] && Number(`0.${parts[1]}`) >= 0.5) return Number(parts[0]) + 1;
    return Number(parts[0]);
};
  
  Math.ceil = function(number) {
    const parts = number.toString().split('.');
    if (!parts[1]) return Number(parts[0]);
    return Number(parts[0]) + 1;
};
  
  Math.floor = function(number) {
    const parts = number.toString().split('.');
    return Number(parts[0]);
};
