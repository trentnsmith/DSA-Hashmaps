const Hashmap = require('./Hashmap');
const HashMap = require('./Hashmap');


const groupAnagrams = (strArr) => {
    const anagramMap = new HashMap()
    strArr.forEach((word) => {
      let sorted = alphabetize(word)
      if(anagramMap.has(sorted)) {
        anagramMap.get(sorted).push(word)
      }
      else {
        anagramMap.set(sorted, [word])
      }
    }) 
    return [...anagramMap.values()]
  }
  
  const alphabetize = word => {
    let alphebtized = word.split('').sort().join('')
    return alphebtized
  }
  
  console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))