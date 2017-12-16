function capitalize(s){
    const capArr = [];
    for (var i = 0 ; i < 2 ; i++) {
    let tempStr = '';
      for (var j = 0 ; j < s.length; j++) {
         if (i == 0) {
               if (j%2 === 1) {
                tempStr += s.charAt(j);
              } else {
                tempStr += s.charAt(j).toUpperCase();
              }
         } else {
                 if (j%2===0) {
                 tempStr += s.charAt(j);
              } else {
                tempStr += s.charAt(j).toUpperCase();
              }
      
       }
       }
       capArr.push(tempStr);
    }
    
      return capArr;
    };