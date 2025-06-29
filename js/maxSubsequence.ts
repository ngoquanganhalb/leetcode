// Find Subsequence of Length K With the Largest Sum
// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.
//C1:
// function maxSubsequence(nums: number[], k: number): number[] {
//     let sortedArr = sort(nums)
//     let arr: number[] = []
//     for(let i = nums.length - k ; i < nums.length ; i++){
//         arr.push(sortedArr[i])
//     }
//     return arr
// };
// (Commented out to avoid duplicate function implementation)

// function sort(nums: number[])
// {
//     for(let i =0 ; i < nums.length ; i++){
//         for(let y = i+1 ; y< nums.length; y++){
//             if(nums[i]>nums[y]){
//                  const temp = nums[i];
//         nums[i] = nums[y];
//         nums[y] = temp;
//             }
//         }
//     }
//     return nums
// }

//C2:

function demsoptxuathien(num: number[]) {
  const map1 = new Map();
  for (const i of num) {
    map1.set(i, (map1.get(i) || 0) + 1); // neu map1.get = chua co value thi bang 0
  }
  return map1;
}

function maxSubsequence(nums: number[], k: number): number[] {
  //lay k phan tu lon nhat
  const topK = [...nums].sort((a, b) => b - a).slice(0, k);
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
