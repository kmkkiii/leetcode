/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // numsをループして、2個ずつ総当たりで取り出して和がtargetと等しいか判定する。
  for (let i = 0; i < nums.length; i++ ) {
    for (let j = i + 1; j < nums.length; j++ ) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; 
      }
    }
  }
  return [];
};
// @lc code=end

