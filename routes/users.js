var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var crypto = require('crypto');
var hash = function (pass, salt) {
        var h = crypto.createHash('sha512');
        h.update(pass);
        h.update(salt);
        return h.digest('base64');
    };
    
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

function signIn(req, res){
	
	 var password = req.param("password");
	  var userName =req.param("userName");
	  var newHash = hash(password, userName);
	  console.log("password"+password);
	  console.log("new hash"+newHash);
	var StringQuery= "select email, password, bank_id from blood_bank where email =\'"+userName+"\'";
	mysql.fetchData( function(error, results){
		if(error){
			throw error;
		}
		else{
			console.log("results.pwd"+results[0].password);
			if(results[0].password == newHash){
				console.log("results.pwd"+results[0].password);
				req.session.bank_id= results[0].bank_id;
				res.send({"user":"valid"});
			}
			else{
				res.send({"user":"invalid"});
			}
		}
	},StringQuery);
}


module.exports = router;
