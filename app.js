const express=require("express")
const http=require("http")
const mongoose=require('mongoose')
const CreateIssueRouter=require('./routes/createissue')

const portname='localhost'
const port=8000

const url='mongodb://localhost:27017/school'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
    (err) => {
      if (err) {
        console.log("Oops");
      } else {
        console.log("MongoDB Connected");
      }
    }
  );

  app.use('/create',CreateIssueRouter);
const app=express();






const server=http.createServer(app);
server.listen(port,()=>{
    console.log("connected to server")
})