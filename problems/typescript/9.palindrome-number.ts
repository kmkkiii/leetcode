/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false; // 負数, 1の位が0の数は回文になりえない
  }

  let revertNumber = 0;
  while (x > revertNumber) {
    revertNumber = revertNumber * 10 + x % 10;
    x /= 10;
  }

  return x === revertNumber || x === revertNumber / 10;
};
// @lc code=end

