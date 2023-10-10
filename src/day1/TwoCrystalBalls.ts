export function two_crystal_balls(floors: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(floors.length));

    let i = jumpAmount;
    while (i < floors.length) {
        if (floors[i]) {
            return i;
        }

        i -= jumpAmount;
        for (let j = 0; j < jumpAmount && i < floors.length; j++, i++) {
            if (floors[i]) {
                return i;
            }
        }
    }

    return -1;
}
