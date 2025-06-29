// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
//  2 is the missing number in the range since it does not appear in nums.
function missingNumber(nums: number[]):number{
  nums.sort((a,b)=>a-b)
  for(let i =0; i < nums.length-1 ; i++){
    if(nums[i]!== nums[i+1]-1)
      return nums[i]+1 
  }
  // If no missing number found in the loop, return 0 if the first number is not 0, 
  // else return the next number after the last element
  if(nums[0]!==0)
    return 0
  else return nums[nums.length-1]+1
}
const num = [3,2,1] 
console.log(missingNumber(num))
