function abbrevName(name){
    let firstLetters = name.split(' ').map(function (s) { return s.charAt(0); }).join('.');
    let capLetters = firstLetters.toUpperCase();
    return capLetters;
    }