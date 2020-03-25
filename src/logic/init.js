#!/usr/bin/env node

const color = require('../helpers/consoleColor')
const validate = require('../helpers/validate')
const data = require('../../data.json')
const utility = require('../helpers/utility')

const initLoker = utility.asyncAwaitWrapper(async() => {
    // gettin value
    const value = process.argv[2];

    // validate if loker already inited 
    if (data.numberOfLoker > 0) throw new Error(`Loker telah di buat, silahkan bersihkan terlebih dahulu !`)

    // validate if the value is empty
    if (!value) throw new Error(`Jumlah loker yang dibuat harus di isi !`)

    // validate if the value is not a number
    if (!validate.isNumber(value)) throw new Error(`Jumlah loker yang dibuat harus di isi dengan angka !`)

    // validate if value should not be more than 1
    if (process.argv.length > 3) throw new Error(`Harap memasukan 1 angka saja !`)

    // save value into json file
    utility.updateValue({
        "numberOfLoker": value
    })

    return console.log(color.FgGreen, `Berhasil membuat loker dengan jumlah ${data.numberOfLoker}`)
})

initLoker()