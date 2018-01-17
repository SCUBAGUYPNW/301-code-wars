function insertDash(num) {
let numToString = num.toString();
let dashedNum = [numToString[0]];
   for (var i = 1; i < numToString.length; i++)
   if((numToString[i-1]%2 === 1)&&(numToString[i]%2 === 1)){
   dashedNum.push('-', numToString[i]);
    }else{ 
        dashedNum.push(numToString[i]);
        }
    return(dashedNum.join(''));
    }