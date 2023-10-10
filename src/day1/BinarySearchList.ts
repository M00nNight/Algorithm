export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0; // Initialize the low index to the start of the array.
    let hi = haystack.length; // Initialize the high index to the end of the array.

    do {
        const m = Math.floor(lo + (hi - lo) / 2); // Calculate the midpoint.
        const v = haystack[m]; // Get the value at the midpoint.

        if (v === needle) {
            return true; // If the midpoint value is equal to the needle, return true.
        } else if (v > needle) {
            hi = m; // If the midpoint value is greater than the needle, search the left half.
        } else {
            lo = m + 1; // If the midpoint value is less than the needle, search the right half.
        }
    } while (lo < hi); // Continue the loop as long as the low index is less than the high index.

    return false; // If the loop finishes without finding the needle, return false.
}
