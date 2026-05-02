/**
 * LeetCode #0020 - Valid Parentheses
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Approach: Stack — O(n) time, O(n) space
 * Use a stack to track opening brackets.
 * For each closing bracket, check if it matches the top of the stack.
 */
function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  for (const ch of s) {
    if ("([{".includes(ch)) { stack.push(ch); }
    else if (stack.pop() !== pairs[ch]) return false;
  }
  return stack.length === 0;
}

