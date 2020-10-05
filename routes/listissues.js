const express = require('express')
const moongoose = require('mongoose')
const Issues = require('../models/createIssue')
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.get('/',  (req, res) => {
    Issues.find({})
    .then((issue)=>{
        res.json(issue)
    })
    .catch((err)=>{
        console.log("Not able to find!");
    })
})

router.get('/:id',(req,res)=>{
    Issues.find({_id:req.params.id})
    .then((issue)=>{
        res.json(issue)
    })
    .catch((err)=>{
        console.log("Not able to find!")
    })
})


module.exports = router;

