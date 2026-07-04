class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // Solution 1:- Brute Force. Buy a day and try to sell at all consequtive days. try all possinble days

        let profit = 0
        let len = prices.length

        for (let i = 0; i < len - 1; i++) {
            let buy = prices[i]

            for (let j = i + 1; j < len; j++) {
                let sell = prices[j]
                let new_profit = sell - buy

                if (new_profit > profit) {
                    profit = new_profit
                }
            }
        }

        return profit
    }
}

// T(c) = O(n2)
// S(c) = O(1)
