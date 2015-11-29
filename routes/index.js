var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});
router.get('/homePage', function(req, res) {
	 
	res.render('home');
	});

router.get('/getLoginPage', function(req, res){
	res.send({"page":"render"});
});

router.get('/login', function(req, res){
	res.render('login');
});
router.get('/getSignupPage', function(req, res){
	res.send({"page":"render"});
});
router.get('/signup', function(req, res){
	res.render('signup');
});
router.get('/thome/:email', function(req, res) {
	var userEmail = req.params.email;
	console.log("----user----"+userEmail);
	res.render('thome',{ 'emailId':userEmail });
	});
router.get('/dashboard', function(req, res) {
	  res.render('dashboard');
	});
router.get('/contactPage', function(req, res){
	res.send({"page":"render"});
});
router.get('/contact', function(req, res) {
	  res.render('contact');
	});
module.exports = router;
