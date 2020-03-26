#!/usr/bin/env node

const color = require('../helpers/consoleColor')
const data = require('../../data.json')
const utility = require('../helpers/utility')
const validate = require('../helpers/validate')

const leaveLoker = utility.asyncAwaitWrapper(async(args) => {
    // define value
    const value = args[2];

    const deletedLoker = data.lokerData.filter((el) => el.lockerNumber === parseInt(value));
    if (deletedLoker.length === 0) throw new Error(`Loker Tidak Ditemukan !`)

    // validate if value not filled
    if (!value) throw new Error(`Nomer Loker harus diisi!`)

    // validate if the value is not a number
    if (!validate.isNumber(value)) throw new Error(`Nomer Loker harus diisi dengan Angka!`)

    const unDeletedLoker = data.lokerData.filter((el) => el.lockerNumber !== parseInt(value));

    // update data loker
    utility.updateValue({
        "lokerData": unDeletedLoker
    })

    return console.log(color.FgGreen, `Kartu Identitas berhasil di hapus dari loker ${value}`)

})

leaveLoker()