// // Input: s = "anagram", t = "nagaram"

// // Output: true

// function isAnagram(s: string, t: string): boolean {
//   const arr1 = s.split('');
//   const arr2 = t.split('')
//   const obj1 : Record<string,number> = {} ;
//   const obj2 :Record<string,number> = {}
//   for(const key of arr1){
//     obj1[key] = (obj1[key]||0)+1
//   }
//   arr2.forEach(key=> obj2[key]=(obj2[key]||0)+1)
//   if(Object.values(obj1).length!==Object.values(obj2).length) return false
//   for(const key in obj1) {
//     console.log(obj1.key)
//     if(obj1[key]!== obj2[key])
//       return false
//   }
//   return true
// };

// console.log(isAnagram('rat','carr'))

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
function longestCommonPrefix(strs: string[]) {
  
}
