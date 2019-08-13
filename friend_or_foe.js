function friend(friends){
    let output = [];
    let regex = /\d/;
  
    friends.forEach(function(element) {
      if (!regex.test(element) && element.length === 4) {
        output.push(element);
      }
    });
    
    return output;
  }
