function incrementString(string) {
    const match = string.match(/\d+/);
    if (!match) return string.concat('1');
    const inc = (Number(match) + 1).toString().padStart(string.length - match.index, '0');
    return string.replace(match[0], inc);
}
