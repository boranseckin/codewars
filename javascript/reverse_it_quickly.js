function weirdReverse(a) {
    const out = [];
    for (let i = 0; i < a.length; i += 1) out.push(a[a.length - 1 - i]);
    return out;
}
