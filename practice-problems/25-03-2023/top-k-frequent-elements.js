// https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const elementFrequencyMap = new Map();

  for (const num of nums) {
    if (elementFrequencyMap.has(num)) {
      const previousOccurence = elementFrequencyMap.get(num);
      elementFrequencyMap.set(num, previousOccurence + 1);
    } else {
      elementFrequencyMap.set(num, 1);
    }
  }

  const frequencyArray = [];
  /**
   * this array size would be nums size
   * frequecy would be the index
   * content would be key
   * [undefined, [3], [2], [1], undefiend, undefiend, undefiend]
   */

  for (const [key, value] of elementFrequencyMap) {
    const content = frequencyArray[value];

    if (content !== undefined) {
      frequencyArray[value] = content.concat(key);
    } else {
      frequencyArray[value] = [key];
    }
  }

  const result = [];

  for (let i = frequencyArray.length; i > 0; i--) {
    const item = frequencyArray[i];

    if (item !== undefined) {
      result.push(...item);
    }

    if (result.length === k) {
      return result;
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3], 2));

console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3], 2));
