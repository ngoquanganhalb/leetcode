let res: any = [];
function smallerNumbersThanCurrent(nums: number[]) {
  let filter: any = []
  for (let i = 0; i < nums.length; i++) {
     filter[i] = nums.filter((x) => x < nums[i]).length;
  }
  return filter;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
