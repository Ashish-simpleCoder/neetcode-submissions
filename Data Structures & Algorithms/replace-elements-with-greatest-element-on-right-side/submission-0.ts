class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let len = arr.length;
        let result = new Array(len);
        let maxOfRightSide = arr[len - 1];

        result[len - 1] = -1;
        let j = len - 2;

        while (j >= 0) {
            const curr = arr[j+1];
            maxOfRightSide = Math.max(curr, maxOfRightSide);
            result[j] = maxOfRightSide;
            j--;
        }

        return result;
    }
}
