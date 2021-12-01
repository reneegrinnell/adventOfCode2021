// Various sliding window approaches/examples I studied, with links


// 1. https://www.geeksforgeeks.org/window-sliding-technique/

// O(n*k) solution for finding maximum sum of
// a subarray of size k

let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
let k = 3;
let n = arr.length;

// Returns maximum sum in a subarray of size k.
function maxSum( arr, n, k){
    // Initialize result
    let max_sum = Number.MIN_VALUE;
 
    // Consider all blocks starting with i.
    for (let i = 0; i < n - k + 1; i++) {
        let current_sum = 0;
        for (let j = 0; j < k; j++)
            current_sum = current_sum + arr[i + j];
 
        // Update result if required.
        max_sum = Math.max(current_sum, max_sum);
    }
 
    return max_sum;
}
 
console.log(maxSum(arr, n, k));


// 2. https://dev.to/procode/sliding-window-technique-from-o-n-to-o-n-3la3

let arr = [1, 3, 5, 6, 2, 7, 8];
let maxSum = 0;  //to keep track of maximum sum.
let sumOfWindow = 0; //to keep track of sum of the window.
let windowSize = 0;

for (let i = 0; i < arr.length + 1; i++){
  if(windowSize == 3){
    console.log('current windows sum is');
    console.log(sumOfWindow);
    //storing the maximum sum
    maxSum = Math.max(maxSum, sumOfWindow);
    //deleting the end element of the window
    sumOfWindow = sumOfWindow - arr[i - 3];
    windowSize--;
  }

   //adding elements to the window.
  sumOfWindow = sumOfWindow + arr[i];
  windowSize++;

}

console.log("The maximum sum is: " + maxSum);


// 3. https://levelup.gitconnected.com/the-sliding-window-strategy-for-solving-algorithms-34c95c80c506