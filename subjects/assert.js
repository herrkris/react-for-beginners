function assert(pass, description) {
  if (pass) {
    console.log('%c✔︎ ok', 'color: green', description);
  } else {
    console.assert(pass, description);
  }
};

module.exports = assert;
