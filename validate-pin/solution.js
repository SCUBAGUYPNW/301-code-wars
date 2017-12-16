function validatePIN (pin) {
    return /^(?=[0-9]*$)(?:.{4}|.{6})$/.test(pin);
      //return true or false
    }