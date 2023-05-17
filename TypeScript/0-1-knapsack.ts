// see: https://javascript.plainenglish.io/javascript-algorithms-knapsack-problem-0-1-6dc96a5d68d

interface Vector extends Array<number> {}

// Brute Force Recursion
/**
 * Algorithm in TypeScript to return the maximum weight a knapsack can carry
 * given the sack maximum capacity and the arrays of weight and value for the items.
 * 
 * @param capacity - Amount of space in the sack to be used by items
 * @param n - Current index we are on in this recursive iteration, descending as the code executes
 * @param values - The array of "value" numbers that represent the importance or real world value of each item
 * @param weights - The array of weights that represents the weight of each item
 * @returns The maximum weight achievable for the knapsack
 */
function getKnapSack(capacity: number, n: number, values: number[], weights: number[]): number {
    // Check capacity and items on zero
    if(capacity === 0 || n === 0) { // In TypeScript triple equals are optional.
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

const values: Vector = [10, 20, 30, 40];
const weights: Vector = [30, 10, 40, 20];
const capacity: number = 40;

getKnapSack(capacity, values.length - 1, values, weights);