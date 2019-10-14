function upArray(arr) {
    if (!arr.length || arr.some((element) => element > 9 || element < 0)) {
        return null;
    }

    for (let i = arr.length - 1; i < arr.length; i -= 1) {
        if (arr[i] === 9) {
            arr[i] = 0;
            if (i === 0) {
                arr.unshift(1);
                break;
            }
            continue;
        }
        arr[i] += 1;
        break;
    }

    return arr;
}
