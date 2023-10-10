export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    // Loop through each element in the 'haystack' array.
    for (let i = 0; i < haystack.length; ++i) {
        // Check if the current element is equal to the 'needle'.
        if (haystack[i] === needle) {
            // If a match is found, return 'true'.
            return true;
        }
    }
    // If no match is found after looping through the entire array, return 'false'.
    return false;
}
