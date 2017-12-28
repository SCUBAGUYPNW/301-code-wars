function disemvowel(str) {
const vowels = "aAeEIioOuU";
let string = '';

for (i = 0; i <= str.length-1; i++){
  if(vowels.indexOf(str[i]) == -1){
     string+=str[i];
  }
}
  return string;
}