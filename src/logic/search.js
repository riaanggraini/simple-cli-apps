#!/usr/bin/env node

const color = require('../helpers/consoleColor')
const data = require('../../data.json')
const utility = require('../helpers/utility')
const validate = require('../helpers/validate')

const searchLoker = utility.asyncAwaitWrapper(async(args) => {
    // define value
    const value = args[2];

    // validate id type the value is empty or wrong format
    if (!value || !validate.isUpperCase(value)) {
        throw new Error(`Anda Belum memasukan tipe identitas atau tipe identitas yang anda masukan salah`)
    }

    // find type identity
    const findIdType = data.lokerData.filter((el) => el.idType === value);

    // get list of id number
    const listIdType = findIdType.map((el) => el.idNumber)

    // validate if id type not found
    if (findIdType.length === 0) throw new Error(`tipe identitas tidak di temukan di loker !`)

    return console.log(color.FgGreen, listIdType)

})

searchLoker()