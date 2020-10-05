const express = require('express')
const moongoose = require('mongoose')
const Issues = require('../models/createIssue')
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',(req,res)=>{
    Issues.find({status:false})
    .then((issue)=>{
        res.json(issue)
    })
    .catch((err)=>{
        console.log(err)
    })
})
router.post('/:id',(req,res)=>{

    Issues.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((res)=>{
        console.log("closed successfully");
    })
})


module.exports = router;

