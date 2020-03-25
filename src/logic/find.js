#!/usr/bin/env node

const color = require('../helpers/consoleColor')
const data = require('../../data.json')
const utility = require('../helpers/utility')
const validate = require('../helpers/validate')

const findLoker = utility.asyncAwaitWrapper(async() => {
    // define value
    const value = process.argv[2];

    // validate id type the value is empty or wrong format
    if (!value || !validate.isNumber(value)) {
        throw new Error(`Anda Belum memasukan nomer identitas atau nomer identitas yang anda masukan salah`)
    }
    const findIdNumb = data.lokerData.filter((el) => el.idNumber === value);

    // validate if id number not found
    if (findIdNumb.length === 0) throw new Error(`nomer identitas tidak di temukan di loker !`)

    return console.log(color.FgGreen, `Kartu Identitas tersebut berada di loker ${findIdNumb[0].lockerNumber}`)

})

findLoker()