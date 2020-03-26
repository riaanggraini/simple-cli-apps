const fs = require('fs')
const data = require('../../data.json')
const color = require('./consoleColor')

const asyncAwaitWrapper = fn => async() => {
    try { 
        const value = process.argv
        // case sensitif validation
        const cmd = value[1].split('/').splice(-1,1)
        if(cmd[0] !== cmd[0].toLowerCase()){
            throw new Error(`Perintah yang and masukan salah`)
        }
        return await fn(value);
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