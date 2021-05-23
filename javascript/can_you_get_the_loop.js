function loop_size(node){
    let current = node;
    let array = [];
    let index = -1;
    
    while (true) {
      index = array.indexOf(current);
      
      if (index < 0) {
        array.push(current);
      } else {
        break;
      }
      
      current = current.getNext();
    }
    
    return(array.length - index);
}
