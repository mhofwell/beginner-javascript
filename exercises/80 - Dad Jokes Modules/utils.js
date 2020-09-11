function randomItemFromArray(arr, not) {
        const item = arr[Math.floor(Math.random() * arr.length)];
        return item === not ? randomItemFromArray(arr, not) : item;
}

export { randomItemFromArray };
