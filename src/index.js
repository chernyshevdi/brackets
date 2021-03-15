module.exports = function check(str, bracketsConfig) {
  return str.includes('()', '[]', '{}')
}
