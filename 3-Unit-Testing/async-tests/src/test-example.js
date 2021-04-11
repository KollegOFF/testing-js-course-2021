export default class TestExample {
  methodForTest(user, callback) {
    return new Promise((resolve, reject) => {
      if (user.age >= 18) {
        setTimeout(() => {
          resolve(user.age);
        }, 0);
      }
      else {
        reject('Это не для лиц моложе 18 лет!');
      }
      //alert('Это не для лиц моложе 18 лет!');
    })
  }
}