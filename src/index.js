module.exports = function reverse (n) {
  let result = n.toString(10).split('').reverse().join('')

  return parseInt(result, 10)
}
