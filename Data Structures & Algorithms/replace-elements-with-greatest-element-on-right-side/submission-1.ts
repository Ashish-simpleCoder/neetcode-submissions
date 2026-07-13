class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // Optimal solution
        let len = arr.length;
        let maxOfRightSide = -1;

        let j = len - 1;

        while (j >= 0) {
            const curr = arr[j];
            const newMax = Math.max(curr, maxOfRightSide);
            arr[j] = maxOfRightSide;
            maxOfRightSide = newMax;
            j--;
        }

        return arr;
    }
}
