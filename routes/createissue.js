const express = require('express')
const moongoose = require('mongoose')
const Issues = require('../models/createIssue')
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    Issues.create({
        issue_desc:req.body.issue_desc;
    })
})

module.exports = router;

