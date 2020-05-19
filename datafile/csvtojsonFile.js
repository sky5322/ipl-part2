const csv = require('csvtojson');
const path = require('path')


async function csvtojsonFile(fileName){
    const data = await csv().fromFile(path.join(__dirname,`../csv_data/${fileName}`))
    return data
}

module.exports = csvtojsonFile