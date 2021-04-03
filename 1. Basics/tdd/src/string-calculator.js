// @ts-check

export default class StringCalculator {
  add(...str) {
    if (str.length > 1) {
      return this.getSum(str);
    }

    // If str contains one element
    const strElement = str[0];

    if (strElement === '') {
      return 0;
    }

    if (isNaN(Number.parseInt(strElement))) {
      return null;
    }

    const array = strElement.split(',');
    if (array.length > 1) {
      return this.getSum(array);
    }

    return +str;
  }


  /**
   * @param {string[]} array
   * @private
   */
  getSum(array) {
    return array.reduce((prev, current) => {
      return +prev + +current;
    }, 0);
  }
}