const fs = require('fs')
const data = require('../../data.json')
const color = require('./consoleColor')

const asyncAwaitWrapper = fn => async() => {
    try {
        // add case sensitif 
        return await fn();
    } catch (err) {
        console.log(color.FgRed, err.message)
    }
};
// save data to json file
const updateValue = async(newValue) => {
    const newData = Object.assign(data, newValue);
    fs.writeFile('data.json', JSON.stringify(newData), function (err) {
        if (err) throw new Error('Something Went Wrong');
    });
};
const findMissingNumbers = (arr) => {
    const sparse = arr.reduce((sparse, i) => (sparse[i] = 1, sparse), []);
    return [...sparse.keys()].filter(i => i && !sparse[i])
}
module.exports = {
    updateValue,
    asyncAwaitWrapper,
    findMissingNumbers,
}