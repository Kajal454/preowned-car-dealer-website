var express = require('express');
var router = express.Router();
const userModel = require("./users");
const CarModel = require("./Car");
const passport = require('passport');
const upload = require('./multer')
const localStrategy =  require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function(req, res, next) {
  
  res.render('i' );
});



router.get('/about', function(req, res, next) {
  res.render('about' );
  
});

router.get('/service', function(req, res, next) {
  res.render('service' );
  
});

router.get('/register', function(req, res, next) {
  res.render('register');
});


router.get('/login', isLoggedIn, function(req, res, next) {
  res.render('index');
});


let Car = [];

router.get('/Car', (req, res) => {
  res.render('Car', { Car });  
});

router.post('/showcar', async(req, res) => {
  const { carName, carModelName , price, year ,fuelType , type , carImages, run} = req.body;
  Car.push({ carName, carModelName ,price , year , fuelType , type , carImages, run});
  
  res.redirect('/showcar');
});

router.get('/showcar', (req, res) => {
  res.render('showcar', { Car });
});


router.post('/register', function(req, res) {
  var data= new userModel({
    username:req.body.username,
    email:req.body.email,
    contact:req.body.contact,
    password: req.body.password,
    role:req.body.role
  })

  userModel.register(data , req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/login");
    })
  })
});



router.post('/login',passport.authenticate("local" ,{
  successRedirect:"/",
  failureRedirect: "/login"
  
    
} ), function(req, res) {
  
});


router.get('/logout', function(req, res , next) {
  req.logout(function(err){
    if(err) { return  next(err);}
    res.redirect("/login");
  });
});


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}




module.exports = router;