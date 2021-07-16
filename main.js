alert('working')

function checkPalindrome(str){
//    return str == str.split('').reverse().join('')
//  return str.split(' ').reverse().join()
const originals = str

let final = ''
for(let i=str.length - 1; i>= 0; i--){
    final += str[i]
}
return final === originals

} console.log(checkPalindrome('madam'))
console.log(checkPalindrome('leonnoel'))
console.log(checkPalindrome('sami'))
console.log(checkPalindrome('racecar'))
console.log(checkPalindrome('nun'))
console.log(checkPalindrome('ali'))