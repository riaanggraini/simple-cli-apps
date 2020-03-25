#!/usr/bin/env node

const data = require('../../data.json')
const utility = require('../helpers/utility')

const statusLoker = utility.asyncAwaitWrapper(async() => {

    let datas = []
    if (data.lokerData.length === 0) {
        datas = [{
            "status": "loker kosong"
        }]
    } else {
        // sort loker
        datas = data.lokerData.sort((a, b) => {
            return a.lockerNumber - b.lockerNumber;
        })
        // transform loker name
        datas = datas.map((el) => {
            return {
                "nomer loker": el.lockerNumber,
                "tipe identitas": el.idType,
                "nomer identitas": el.idNumber
            }
        })
    }
    console.table(datas)
})

statusLoker()