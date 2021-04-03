// @ts-check

import StringCalculator from '../src/string-calculator';

describe('StringCalculator class:', () => {
  test('Empty string should return 0', () => {
    // Arrange
    expect.assertions(1);
    const calculator = new StringCalculator();

    // Act
    const sum = calculator.add('');

    // Assert
    expect(sum).toBe(0);
  });

  test('Argument with one number shuld return corresponding integer value', () => {
    // Arrange
    const calculator = new StringCalculator();
    const number = 5;

    // Act
    const sum = calculator.add(`${number}`);

    // Assert
    expect(sum).toBe(number);
  });

  test('Argument is a string with non digit chars', () => {
    // Arrange
    const calculator = new StringCalculator();

    // Act
    const sum = calculator.add(`sdfsdf`);

    // Assert
    expect(sum).toBeNull();
  });

  test('Argument with several integers should return sum of these numbers', () => {
    // Arrange
    const calculator = new StringCalculator();
    const number1 = 5;
    const number2 = 5;
    const expectedValue = number1 + number2;

    // Act
    const sum = calculator.add(`${number1},${number2}`);

    // Assert
    expect(sum).toBe(expectedValue);
  });

  test('Should work with several arguments', () => {
    // Arrange
    const calculator = new StringCalculator();
    const number1 = 5;
    const number2 = 5;
    const number3 = 7;
    const expectedValue1 = number1 + number2;
    const expectedValue2 = number1 + number2 + number3;

    // Act
    const sum1 = calculator.add(`${number1}`, `${number2}`);
    const sum2 = calculator.add(`${number1}`, `${number2}`, `${number3}`);


    // Assert
    expect(sum1).toBe(expectedValue1);
    expect(sum2).toBe(expectedValue2);
  });
});
