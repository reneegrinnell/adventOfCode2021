// https://levelup.gitconnected.com/the-sliding-window-strategy-for-solving-algorithms-34c95c80c506

const maxSubarraySum = (arr, num) => {
  let tempSum = 0;
  let maxSum = 0;

  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr(i);
  }

  tempSum = maxSum;

  // sliding window!
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
};

maxSubarraySum([1, 3, 5, 6, 3, 5, 7, 10, 2, 8, 9], 3);