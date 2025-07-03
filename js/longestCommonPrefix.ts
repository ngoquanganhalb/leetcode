// Input: strs = ["flower","flow","flight"]
// Output: "fl"
function longestCommonPrefix(strs: string[]) {
  const minLoopArr: number[] = [];
  let obj: Record<number, string[]> = {};
  let res: string = "";
  for (let i = 0; i < strs.length; i++) {
    obj[i] = strs[i].split("");
    minLoopArr.push(strs[i].split("").length);
  }
  const minLoop = minLoopArr.sort((a, b) => a - b)[0];
  for (let j = 0; j < minLoop; j++) {
    const arr: string[] = [];
    for (let objIndex = 0; objIndex < strs.length; objIndex++) {
      arr.push(obj[objIndex][j]);
    }
    if (duyetTungPtu(arr) === "") return res;
    res = res + duyetTungPtu(arr);
  }
  return res;
}

function duyetTungPtu(arr: string[]) {
  const first = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (first !== arr[i]) return "";
  }
  return arr[0];
}
console.log(longestCommonPrefix(["cir", "car"]));

//c2: sort, so sanh arr[0] va arr[cuoi]
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
