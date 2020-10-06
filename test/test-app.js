process.env.NODE_ENV = 'test';

const chai=require('chai')
const chaiHttp=require('chai-http')
const app=require('../app')
const mongoose = require("mongoose");
const Issues=require('../models/createIssue')

const should=chai.should();


chai.use(chaiHttp);


describe('Issues', ()=> {

    Issues.collection.drop();

    beforeEach((done)=>{
        Issues.create({
            issue_desc:'Working on test cases',
            status:'true'
        })
        .then(()=>{
            done();
        })
        
    })

    afterEach((done)=>{
        Issues.collection.drop();
        done();
    });

    it('should list all Issues on /listissues GET',(done)=>{
        chai.request(app)
        .get('/listissues')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            done();
        })
    })
    it('should list all open issues on /openissue GET',(done)=>{
        chai.request(app)
        .get('/openissue')
        .end((err,res)=>{
            console.log(res.body)
            res.should.have.status(200)
            res.should.be.json;
            res.body.should.be.a('array');
            done();
        })
    })

    it('should list all close issues on /closeissue GET',(done)=>{
        chai.request(app)
        .get('/openissue')
        .end((err,res)=>{
            console.log(res.body)
            res.should.have.status(200)
            res.should.be.json;
            res.body.should.be.a('array');
            done();
        })
    })
    it('should create a issue /create POST',(done)=>{
        chai.request(app)
        .post('/create')
        .send({"issue_desc":"Check docu","status":true})
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.json;
            res.should.be.a('object');
            res.body.should.have.property('issue_desc')
            res.body.should.have.property('status')
            done();
        })
    })
   
  });