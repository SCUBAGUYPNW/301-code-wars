function filter_list(l) {
    return l.filter(isInt => parseInt(isInt) === isInt);
  }