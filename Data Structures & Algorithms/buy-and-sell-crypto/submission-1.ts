class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Solution 2:- Left and right pointer approach. Optimal approach

        // 1. Create max_profit, left and right pointer
        // 2. Loop untill right < length
        // 2.1 if left(buy) prices is less then right(sell) price
        // 2.1.1 derive new profit - prices[right]-prices[left]
        // 2.1.2 take max of new_profit and old max_profit and assign to max_profit
        // 2.2 Else make left(buy) pointer equal to right pointer to minumum value
        // 2.3 increment right(sell) pointer
        // 3. Return the max_profit after the iteration is done

        // 1. Create max_profit, left and right pointer
        let max_profit = 0
        // left = buy
        // right = sell
        let left = 0, right = 1

        let len = prices.length

        // 2. Loop untill right < length
        while (right < len) {
            // 2.1 if left(buy) prices is less then right(sell) price
            if (prices[left] < prices[right]) {
                // 2.1.1 derive new profit - prices[right]-prices[left]
                const profit = prices[right] - prices[left]
                // 2.1.2 take max of new_profit and old max_profit and assign to max_profit
                max_profit = Math.max(profit, max_profit)
            }
            // 2.2 Else increment left(buy) pointer
            else {
                left = right
            }
            // 2.3 increment right(sell) pointer
            right++
        }

        // 3. Return the max_profit after the iteration is done
        return max_profit
    }
}

// T(c) = O(n)
// S(c) = O(1)
