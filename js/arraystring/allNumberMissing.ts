// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
// Input: nums = [1,1]
// Output: [2]
// Constraints:
// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

function findDisappearedNumbers(nums: number[]): number[] {
  const res: number[] = [];
  const n = nums.length;
  const seen = new Set<number>(nums); // tạo tập hợp các số đã thấy

  for (let i = 1; i <= n; i++) {
    if (!seen.has(i)) {
      res.push(i); // nếu chưa thấy số i → thêm vào kết quả
    }
  }

  return res;
}

const num = [5, 3, 1, 7, 8];
console.log(findDisappearedNumbers(num)); // 👉 [3, 4]