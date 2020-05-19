const express = require('express');
const getData = require('../datafile/toGetDataFile');
const getDataYearVise = require('../datafile/toGetDataFileYear');
const fs = require("fs");
const path = require('path');
const route = express.Router();

(async function(){
    const result = await getData()
    await fs.writeFile(path.join(__dirname,'../public/data.json'), JSON.stringify(result),'utf8',(err)=>{
        if(err){
            console.log(err);
        }
    })
})()


route.post('/getdata',(req,res)=>{
    if(parseInt(req.query.year)>2019 || parseInt(req.query.year)<2008){
        res.status(404).send()
    }else{
    getDataYearVise(req.query.year).then(result=>{
        res.json(result)
    }) }
    
})

module.exports = route