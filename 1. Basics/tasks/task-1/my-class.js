class MyClass {
  static removeFalsyValues(array) {
    if (!Array.isArray(array)) {
      throw new TypeError();
    }

    return array.filter((value) => !MyClass._isFalsy(value));
  }

  static _isFalsy(value) {
    return value === '' || value === 0 || value === false || value === null || value === undefined || Number.isNaN(value);
  }
}

module.exports = MyClass;
