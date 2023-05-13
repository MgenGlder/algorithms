// see: https://javascript.plainenglish.io/javascript-algorithms-knapsack-problem-0-1-6dc96a5d68d

const values = [10, 20, 30, 40];
const weights = [30, 10, 40, 20];
const capacity = 40;
// Brute Force Recursion
function getKnapSack(capacity, n, values, weights) {
    // Check capacity and items on zero
    if(capacity === 0 || n === 0) {
        return 0;
    }

    // if weight of current element is less than or equal to capacity we can either include or exclude item
    if(weights[n] <= capacity) {
        return Math.max(
            values[n] + getKnapSack(capacity - weights[n], n - 1, values, weights),
            getKnapSack(capacity, n - 1, values, weights)
        );
    }

    // if weight of current element is greater than the capacity we will not include it thus returning just the ignoring part.
    return getKnapSack(capacity, n - 1, values, weights);
}

getKnapSack(capacity, values.length - 1, weights);