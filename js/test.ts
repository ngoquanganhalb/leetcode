// // Input: s = "anagram", t = "nagaram"

// // Output: true

function longestCommonPrefix(strs: string[]) {
  strs.sort();
  let res: string = "";
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0].charAt(i) === strs[strs.length - 1].charAt(i)) {
      res = res + strs[0].charAt(i);
    } else return res;
  }
  return res;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
