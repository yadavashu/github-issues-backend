const express=require("express")
const http=require("http")
const mongoose=require('mongoose')
const cors=require('cors')
const CreateIssueRouter=require('./routes/createissue')
const ListIssuesRouter=require('./routes/listissues')
const DeletIssueRouter=require('./routes/deleteissue')
const CloseIssueRouter=require('./routes/closeissue')
const OpenIssueRouter=require('./routes/openissue')
const portname='localhost'
const config=require('./_config')
const port=8000

// const url='mongodb://localhost:27017/school'
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
//     (err) => {
//       if (err) {
//         console.log("Oops");
//       } else {
//         console.log("MongoDB Connected");
//       }
//     }
//   );
const app=express();
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});
    
    app.use(cors());
  app.use('/create',CreateIssueRouter);
  app.use('/listissues',ListIssuesRouter);
  app.use('/closeissue',CloseIssueRouter);
  app.use('/deleteissue',DeletIssueRouter);
  app.use('/openissue',OpenIssueRouter);





const server=http.createServer(app);
server.listen(port,()=>{
    console.log("connected to server")
})

module.exports = app