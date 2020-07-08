const Hashmap = require('./Hashmap');
const HashMap = require('./Hashmap');
const string = 'acecarr';

const palindrome = (string) => {
    const palindromeMap = new HashMap()
    let odd = 0
    for (let i = 0; i < string.length; i++) {
      if (palindromeMap.get(string[i]) === undefined) {
        palindromeMap.set(string[i], 1)
      }
      else {
        let char = palindromeMap.get(string[i])
        palindromeMap.set(string[i], char+=1)
      }
    }
    for (let i = 0; i < palindromeMap.size; i++) {
      if(palindromeMap.get(string[i]) % 2 !==0) {
        odd++
        console.log('odd', odd)
      }
      if(odd > 1) {
        return false
      }
    }
    return true
  }
  
console.log(palindrome(''))