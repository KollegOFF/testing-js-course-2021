const TOKEN_PREFIX = 'Bearer ';
const TOKEN_REGEX = /^[a-zA-Z0-9]{10,}/;

module.exports = (header) => {
  if (header === '') {
    return null;
  }

  if (!header) {
    throw new TypeError();
  }

  const [, token] = header.split(TOKEN_PREFIX);
  if (!TOKEN_REGEX.test(token)) {
    throw new Error();
  }

  return token;
};
