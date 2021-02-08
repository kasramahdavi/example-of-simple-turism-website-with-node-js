const express = require('express')
const app = express();
const port = 3000;
var hbs  = require('express-handlebars');
const path = require('path');
const multer = require('multer');
const Commentmodel = require('./models/comment-model');
const imagemodel = require('./models/image-model');

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.set()
app.engine( 'hbs', hbs( { 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  } ) );


  //upload parts
 //practice all blogs
 const imagedata = imagemodel.find({});
  
 var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/upload");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  });
  var upload = multer({
    storage: Storage,
  }).single("image"); 

  app.set( 'view engine', 'hbs' );








  app.get('/all',(req,res)=>{
    Commentmodel.find()
     .then((result)=>{
         res.send(result)
     })
     
 
    })

    //routes
app.get('/', function (req, res) {
    res.render('home');
});





app.get('/contact', function (req, res) {
    Commentmodel.find()
     .then((result)=>{
         res.render('contact',{title: 'your comments',comments: result})
     })
    
});
app.post('/contact',(req,res)=>{
     const comment = new Commentmodel(req.body)
        comment.save()
         .then((result)=>{
             res.redirect('/contact');
         })
})




app.get('/stories', function (req, res) {
  imagedata.exec(function(err,data){
        if(err) throw err;
        res.render('stories',{records:data})
      })
    
    
});
app.post('/stories',(req,res)=>{
    upload(req,res,function(err){
        if(err){
            console.log(err);
            return res.end("algo falta");
        }else{
            console.log(req.file.path);

            var imagename =req.file.filename;
            var imageg = new imagemodel({
              
                imagename:imagename
            });
            imageg.save(function(err,doc){
                if(err) throw err;
                imagedata.exec(function(err,data){
                  if(err) throw err;
                  res.render('stories',{records:data, success:true})
                })
            })
        }
    })
  })





app.get('/tours', function (req, res) {
    res.render('content');
});
app.get('/about', function (req, res) {
  res.render('about');
});

app.listen(port);