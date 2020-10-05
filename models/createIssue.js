const mongoose=require('mongoose')
const Scheme=mongoose.Schema;

const issueSchema=new mongoose.Schema({
    issue_desc:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }
})

var issues=mongoose.model('issue',issueSchema)
module.exports=issues;