const Calculator = function() {
    this.evaluate = (string) => {
        let calculated = string;
        while (isNaN(calculated)) {
            calculated = this.findOp(calculated);
        }
        return Number(calculated);
    };

    this.findOp = (string) => {
        // Match parantheses
        let found = string.match(/\((\-?\d+)(\.\d+)*([eE][\-\+]?\d+)?\s*[\-\+\*\/]\s*(\-?\d+)(\.\d+)?([eE][\-\+]?\d+)?\s*\)/);
        if (found) {
            const result = this.findOp(found[0].substring(1, found[0].length - 1));
            return string.replace(found[0], result);
        }

        // Match multiplication or division
        found = string.match(/(\-?\d+)(\.\d+)?([eE][\-\+]?\d+)?\s*[\*\/]\s*(\-?\d+)(\.\d+)?([eE][\-\+]?\d+)?/);
        if (found) {
            const result = this.handleOp(found[0]);
            return string.replace(found[0], result);
        }

        // Match addition or substraction
        found = string.match(/(\-?\d+)(\.\d+)?([eE][\-\+]?\d+)?\s*[\+\-]\s*(\-?\d+)(\.\d+)?([eE][\-\+]?\d+)?/);
        if (found) {
            const result = this.handleOp(found[0]);
            return string.replace(found[0], result);
        }
    };

    this.handleOp = (string) => {
        let operands = string.split('*');
        if (operands.length > 1) return (Number(operands[0]) * Number(operands[1]));

        operands = string.split('/');
        if (operands.length > 1) return (Number(operands[0]) / Number(operands[1]));

        operands = string.split('+');
        if (operands.length > 1) return (Number(operands[0]) + Number(operands[1]));

        // Negative sign can be before numbers and after exponentials
        let firstIndex = string.search(/\d+\s*\-\s*\d+/); // Find the actual operator
        operands = [string.substring(0, string.indexOf('-', firstIndex))]; // Get the first half
        operands.push(string.substring(string.indexOf('-', firstIndex) + 1)); // Get the second half
        if (operands.length > 1) return (Number(operands[0]) - Number(operands[1]));

        return NaN;
    };
};
