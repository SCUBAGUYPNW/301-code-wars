function cubeOdd(arr) {
    let arrCubed = arr.map(i => Math.pow(i, 3));
       if (arrCubed.includes(NaN)) {
          return undefined;
          } else {
          console.log(arrCubed);
          return arrCubed.filter(i => i % 2).reduce((acc, cur) => (acc + cur));
          }
    }