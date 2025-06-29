function maxSubsequence(nums: number[], k: number): number[] {
  //lay k phan tu lon nhat
  const topK = nums.sort((a, b) => b - a).slice(0, k);
  console.log(nums);
  //dem so ptu xuat hien trong mang topK :
  const freq = demsoptxuathien(topK);
  //duyet lai mang goc
  let res: number[] = [];
  for (const i of nums) {
    if (freq.get(i)) {
      res.push(i); // them i vao res
      freq.set(i, freq.get(i) - 1);
    }
    if (res.length === k) break;
  }
  return res;
}

function demsoptxuathien(num: number[]) {
  const map1 = new Map();
  for (const i of num) {
    map1.set(i, (map1.get(i) || 0) + 1); // neu map1.get = chua co value thi bang 0
  }
  return map1;
}
console.log(maxSubsequence([2,4, 3, 3, 2], 2));
