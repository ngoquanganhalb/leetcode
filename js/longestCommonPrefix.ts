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
