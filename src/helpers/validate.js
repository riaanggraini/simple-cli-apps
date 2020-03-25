const isNumber = (number) => {
    const re = /^[0-9]+([,.][0-9]+)?$/g;
    return re.test(number);
};
const isUpperCase = (value) => {
    const re = /^[A-Z]*$/;
    return re.test(value);
}

module.exports = {
    isNumber,
    isUpperCase,
}