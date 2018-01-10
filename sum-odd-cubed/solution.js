function cubeOdd(arr) {
    let cubed = arr.map(i => Math.pow(i, 3));
       if (cubed.includes(NaN)) {
          return undefined;
          } else {
          console.log(cubed);
          return cubed.filter(i => i % 2).reduce((acc, cur) => (acc + cur));
          }
    }