// JavaScript code for Dynamic Programming based
// solution for 0-1 Knapsack problem  
// A utility function that returns
// maximum of two integers
function max(a, b) {
    return (a > b) ? a : b;
}
// Prints the items which are put
// in a knapsack of capacity W
function printknapSack(capacity, weightList, valueList, n) {
    var i, w;
    var K = new Array(n + 1);
    // Initialize 2-D Array as empty
    for (i = 0; i < K.length; i++) {
        K[i] = new Array(capacity + 1);
        for (var j = 0; j < capacity + 1; j++) {
            K[i][j] = 0;
        }
    }
    // Build table K[][] in bottom up manner
    for (i = 0; i <= n; i++) {
        for (w = 0; w <= capacity; w++) {
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (weightList[i - 1] <= w)
                K[i][w] = Math.max(valueList[i - 1] +
                    K[i - 1][w - weightList[i - 1]], K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }
    // stores the result of Knapsack
    var res = K[n][capacity];
    console.log(res);
    w = capacity;
    for (i = n; i > 0 && res > 0; i--) {
        // either the result comes from the top
        // (K[i-1][w]) or from (val[i-1] + K[i-1]
        // [w-wt[i-1]]) as in Knapsack table. If
        // it comes from the latter one/ it means
        // the item is included.
        if (res == K[i - 1][w])
            continue;
        else {
            // This item is included.
            console.log(weightList[i - 1]);
            // Since this weight is included its
            // value is deducted
            res = res - valueList[i - 1];
            w = w - weightList[i - 1];
        }
    }
}
var val = [60, 100, 120];
var wt = [10, 20, 30];
var W = 50;
var n = val.length;
printknapSack(W, wt, val, n);
// This code is contributed by avanitrachhadiya2155
