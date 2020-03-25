#!/usr/bin/env node

const color = require('../helpers/consoleColor')
const utility = require('../helpers/utility')

const searchLoker = utility.asyncAwaitWrapper(async() => {

    const dataToUpdate = {
        numberOfLoker: '0',
        lokerData: []
    }
    // update loker
    utility.updateValue(dataToUpdate)

    console.log(color.FgGreen, 'Sampai Jumpa Kembali')
})

searchLoker()