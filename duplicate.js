const Hashmap = require('./Hashmap');
const HashMap = require('./Hashmap');

const string = 'google all that you think can think of';
const string2 = 'google';
const duplicate = new HashMap();

for (let i = 0; i < string2.length; i++) {
  duplicate.set(string[i], string2[i]);
}

console.log(duplicate);
let newStr = '';
duplicate._hashTable.forEach(letter => {
  newStr += letter.value;
});

console.log(newStr);