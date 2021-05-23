function formatDuration(seconds) {
    let result = [];

    if (seconds === 0) {
        return('now');
    }
    
    if (Math.floor(seconds / 31536000) !== 0) {
        const years = Math.floor(seconds / 31536000);
        result.push(years > 1 ? `${years} years` : `${years} year`);
        seconds -= (years * 31536000)
    }

    if (Math.floor(seconds / 86400) !== 0) {
        const days = Math.floor(seconds / 86400);
        result.push(days > 1 ? `${days} days` : `${days} day`);
        seconds -= (days * 86400)
    }

    if (Math.floor(seconds / 3600) !== 0) {
        const hours = Math.floor(seconds / 3600);
        result.push(hours > 1 ? `${hours} hours` : `${hours} hour`);
        seconds -= (hours * 3600)
    }

    if (Math.floor(seconds / 60) !== 0) {
        const minutes = Math.floor(seconds / 60);
        result.push(minutes > 1 ? `${minutes} minutes` : `${minutes} minute`);
        seconds -= (minutes * 60)
    }

    if (seconds !== 0) {
        result.push(seconds > 1 ? `${seconds} seconds` : `${seconds} second`);
    } 
    
    let phrase = '';
    
    if (result.length === 1) {
        return(result[0]);
    }

    result.forEach((element, i) => {
        if (i < result.length - 1) {
            phrase = phrase.concat(element + ', ');
        } else {
            phrase = phrase.slice(0, -2);
            phrase = phrase.concat(' and ' + element);
        }
    });

    return phrase;
}
