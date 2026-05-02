/**
 * LeetCode #0001 - Two Sum
 * Difficulty: Easy
 * https://leetcode.com/problems/two-sum/
 *
 * Approach: Hash Map — O(n) time, O(n) space
 * Store each number's complement in a map.
 * If the current number exists in the map, we found the pair.
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i], i);
  }
  return [];
}

