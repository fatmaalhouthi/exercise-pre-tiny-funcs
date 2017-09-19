/**
 * mf module.
 *
 * @module src/mf
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the value of a number rounded upward to its nearest integer.
 *
 * @param {number} number  A number.
 * @returns {number} The smallest integer greater than or equal to the given number.
 */
function roundUp (number) {
 let result = Math.ceil(number)
 return result
}

/**
 * Returns the value of a number rounded d9999999999999*-*111ownward to its nearest integer.
 *
 * @param {number} number A number.
 * @returns {number} The smallest integer less than or equal to the given number.
 */
function roundDown (number) {
 let result = Math.floor(number)
 return result
}
/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number A number.
 * @returns {number} The value of the given number rounded to the nearest integer.
 */
function round (number) {
  let result = Math.round(number)
  return result
}

/**
 * Returns the length of a string.
 *
 * @param {string} str The string to get the length of.
 * @returns {number} Returns the the length of the sequence of characters of the given string.
 */
function getStringLength (str) {
let result = String.length(str)
return result
}

/**
 *  Returns the first character from a string.
 *
 * @param {string} str The string to get the first character from.
 * @returns {string} A string representing the first character.
 */
function getFirstLetter (str) {
  let result = str.charAt (0)
  return result
}

/**
 * Returns the index of the first occurrence of the question mark character (?).
 *
 * @param {string} str The string to search.
 * @returns {number} The index of the first occurrence of the question mark character; -1 if not found.
 */
function getIndexOfQuestionMark (str) {
  let result = str.charAt(-1)
  return result.
}

/**
 * Determines whether two strings have the same value.
 *
 * @param {string} str1 The first string to compare.
 * @param {string} str2 The second string to compare.
 * @returns {boolean} true if the value of the str1 parameter is the same as the value of the str2 parameter; otherwise, false.
 */
function isEqual (str1, str2) {
  let result 
  if (str1===str2) result = 'true';  else result = 'false';
 return result
}

/**
 * Returns true if number is odd, or false if number is even.
 *
 * @param {number} number The number to test.
 * @returns {boolean} true if number is odd; otherwise, false.
 */
function isOdd (number) {
  let result
  if( number % 2 === 0) result = 'number is even' ; else result = 'number is odd'
 
  return result

}

/**
 * Returns true if number is even, or false if number is odd.
 *
 * @param {number} number The number to test.
 * @returns {boolean} true if number is even; otherwise, false.
 */
function isEven (number) {
  let result
  if( number % 2 === 0) result = 'number is even' ; else result = 'number is odd'
 
  return result
}
// Exports
exports.roundUp = roundUp
exports.roundDown = roundDown
exports.round = round
exports.getStringLength = getStringLength
exports.getFirstLetter = getFirstLetter
exports.getIndexOfQuestionMark = getIndexOfQuestionMark
exports.isEqual = isEqual
exports.isOdd = isOdd
exports.isEven = isEven
