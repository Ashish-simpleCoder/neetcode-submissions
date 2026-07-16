class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let count = 0;

        details.forEach((data) => {
            // slice string to get only "age" part of the string
            const age = +data.slice(11, -2);
            if (age > 60) {
                count++;
            }
        });
        return count;
    }
}
