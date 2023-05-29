add = (a, b) => {
    return parseFloat(a) + parseFloat(b);
}

sub = (a, b) => {
    return parseFloat(a) - parseFloat(b);
}

mul = (a, b) => {
    return parseFloat(a) * parseFloat(b);
}

div = (a, b) => {
    return parseFloat(a) / parseFloat(b);
}

power = (a, b) => {
    return Math.pow(parseFloat(a), parseFloat(b));
}


module.exports.feature = { add, sub, mul, div, power }