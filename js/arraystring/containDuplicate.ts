// Given an integer array nums, return true if any value appears att
//  least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.
// C1:
function containsDuplicate(nums: number[]): boolean {
  for (const i of nums)  {
    for (let y = i + 1; y < nums.length; y++) {
      if (i === nums[y]) {
        return true;
      }
    }
  }
  return false;
}
const nums = [1,2,3,1] 
console.log(containsDuplicate(nums))
//C2: toi uu hon:
function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const i of nums) {
    console.log(seen)
    if (seen.has(i)) {
      return true;
    }
    seen.add(i);
  }
  return false;
}