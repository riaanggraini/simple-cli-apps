#!/usr/bin/env node

const color = require('../helpers/consoleColor')
const validate = require('../helpers/validate')
const data = require('../../data.json')
const utility = require('../helpers/utility')

const numberLocker = [] // number list of filled loker

data.lokerData.map((el) => {
    if (el.lockerNumber) numberLocker.push(el.lockerNumber)
})

const inputLoker = utility.asyncAwaitWrapper(async() => {
    // gettin value
    const idType = process.argv[2];
    const idNumber = process.argv[3];

    const checkEmptyLoker = utility.findMissingNumbers(numberLocker)

    // validate if loker is not created yet
    if (data.numberOfLoker < 1) {
        throw new Error(`Loker belum di buat, silahkan buat terlebih dahulu !`)
    }
    // validate if loker are full
    if ((data.lokerData.length) === parseInt(data.numberOfLoker)) {
        throw new Error(`Loker Penuh, silahkan Kosongkan terlebih dahulu !`)
    }
    // validate id type the value is empty or wrong format
    if (!idType || !validate.isUpperCase(idType)) {
        throw new Error(`Anda Belum memasukan jenis identitas atau type identitas yang anda masukan salah `)
    }
    // validate id type the value is empty or wrong format
    if (!idNumber || !validate.isNumber(idNumber)) {
        throw new Error(`Anda Belum memasukan nomer identitas atau nomer identitas yang anda masukan salah`)
    }
    // decide locNumber
    let lokNumber = 0;

    if (data.lokerData.length < data.numberOfLoker && checkEmptyLoker.length === 0) {
        lokNumber = data.lokerData.length + 1
    } else {
        lokNumber = checkEmptyLoker[0]
    }
    // define format data
    const dataLoker = {
        "lockerNumber": lokNumber,
        "idType": idType,
        "idNumber": idNumber,
    }
    // push into existig existing data loker
    data.lokerData.push(dataLoker)

    // save to data.json
    utility.updateValue({
        "lokerData": data.lokerData
    })

    return console.log(color.FgGreen, `Kartu Identitas tersimpan di loker ${lokNumber}`)

})

inputLoker()