const queryLocal = (pairs) => {
    const result = {};
    pairs = pairs.substring(1).split('&');
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        if (value.length > 0 && value !== 'null' && value !== 'undefined') {
            result[key] = value;
        }
    });
    console.log(result);
}

// queryLocal('?country=null&eurl=undefined&id=684124076491&itemIds=0&scm=false&spm=')

// const a = undefined

// if (a) {
//     console.log('1');
// } else {
//     console.log('const a = undefined => if(a){} -> return false ');
// }

// if (a.length > 0) { // err vi undefined se ko co thuoc tinh gi vi length cung la thuoc tinh
//     console.log('1');
// } else {
//     console.log('2');
// }

////////////////////
const b = '   '

// console.log(typeof b);
// if (b) {
//     console.log('b khac undefined, value false, value 0, value null ');
// }


String.prototype.beautiSpace = function () {
    return this.replace(/\s+/g, ' ').trim();
};

const valid = (v) => {
    const type = (typeof v)
    switch (type) {
        case 'string':
            return v.beautiSpace().length > 0
            break;
        case 'number':
            return v > 0;
            break;
        case 'boolean':
            return v;
            break;
        default:
            return false
            break;
    }
}

if (valid(b)) {
    console.log('valid');
}