const express = require('express')
const moongoose = require('mongoose')
const Issues = require('../models/createIssue')
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/:id',(req,res)=>{

    Issues.findByIdAndDelete({_id:req.params.id})
    .then((res)=>{
        console.log("deleted successfully");
    })
})


module.exports = router;

