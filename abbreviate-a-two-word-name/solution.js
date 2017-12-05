function abbrevName(name){
    let isolateFirstLetters = name.split(' ').map(function (s) { return s.charAt(0); }).join('.');
    let capLetters = isolateFirstLetters.toUpperCase();
    return capLetters;
    }