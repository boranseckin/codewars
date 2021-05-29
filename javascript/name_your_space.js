function namespace(root, path, value){
    const obj = path.split('.');
    let returnVal, str = 'root';

    if (!value) {
        try {
            return eval(`${str}.${path}`);
        } catch (error) {
            return undefined;
        }
    }
    
    obj.forEach((el, i) => {
        if (i === obj.length - 1) {
            eval(str)[el] = value;
            return;
        }

        eval(str)[el] = {};
        str = `${str}.${el}`;
    });

    return returnVal;
}
