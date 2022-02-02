const identity = (str) => {
  console.log(str);
  return str;
};

module.exports = {
  foo: () => identity('foo'),
  bar: () => identity('bar'),
};
