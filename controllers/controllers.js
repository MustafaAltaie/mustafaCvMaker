const express = require('express');
const router = express.Router();
const fs = require('fs');
const mongoose = require('mongoose');
require('../models/connection');

var NewClient = mongoose.model('clients');

router.get('/', function(req, res){
    res.render('./layouts/index');
});

router.get('/design1', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design1', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design2', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design2', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design3', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design3', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design4', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design4', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design5', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design5', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design6', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design6', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design7', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design7', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design8', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design8', {
            imageFiles: imageFiles
        });
    });
});


router.get('/design9', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design9', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design10', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design10', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design11', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design11', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design12', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design12', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design13', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design13', {
            imageFiles: imageFiles
        });
    });
});

router.get('/design14', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/design14', {
            imageFiles: imageFiles
        });
    });
});

router.get('/allCvs', function(req, res){
    NewClient.find(function(err, data){
        res.render('./layouts/allCvs', {
            cvList: data
        });
    }).lean();
});

router.get('/register/:id', function(req, res){
    res.render('./layouts/register', {
        design: req.params.id
    });
});


router.get('/authorization/:id/:design', function(req, res){
    fs.readFile('passcode.txt', 'utf8' , function(err, passCode){
        if(req.params.id == passCode){
            var newPassCode = Math.ceil(Math.random()*9999) + 10000;
            fs.writeFile('passcode.txt', newPassCode.toString(), function(){
                res.redirect('/authorizationSucceeded/' + req.params.design);
            });
        }
        else
        res.redirect('/register/' + req.params.design);
    });
});

router.get('/authorizationSucceeded/:design', function(req, res){
    res.render('./layouts/getAuthorizedPage', {
        design: req.params.design
    });
});

router.get('/4435966mustafa', function(req, res){
    fs.readFile('passcode.txt', 'utf8' , function(err, passCodeData){
        res.render('./layouts/passcodePage', {
            passcode: passCodeData
        });
    });
});

router.post('/imageUpload', function(req, res){
    var file = req.files.file;
    file.mv('personal images/' + req.body.fileName + '.jpg', function(){});
    res.redirect('/' + req.body.redirect);
});

router.get('/deleteImage/:id/:redirect', function(req, res){
    fs.unlinkSync('personal images/' + req.params.id + '.jpg', function(){});
    if(req.params.redirect != 'home')
    res.redirect('/' + req.params.redirect);
    else
    res.redirect('/');
});

router.post('/newCV', async function(req, res){
    var email = await NewClient.find({clientEmail: req.body.clientEmail}).exec();
    function createNewCvFunction(){
        var newClient = new NewClient();
        newClient.clientName = req.body.clientName;
        newClient.clientEmail = req.body.clientEmail;
        newClient.clientNumber = req.body.clientNumber;
        newClient.clientTitle = req.body.clientTitle;
        newClient.clientAddress = req.body.clientAddress;
        newClient.clientProfile = req.body.clientProfile;
        newClient.mySocialMediaTitle = req.body.mySocialMediaTitle;
        newClient.mySocialMediaText = req.body.mySocialMediaText;
        newClient.referenceTitle = req.body.referenceTitle;
        newClient.languageTitle = req.body.languageTitle;
        newClient.experiences = req.body.experiences;
        newClient.educations = req.body.educations;
        newClient.skills = req.body.skills;
        newClient.hobby = req.body.hobby;
        newClient.save(function(){
            res.redirect('/' + req.body.designNumber);
        });
    }
    if(req.body._id == ''){
        if(email.length == 0){
            createNewCvFunction();
        }
        else{
            NewClient.findOneAndRemove({clientEmail: req.body.clientEmail}, function(){
                createNewCvFunction();
            });
        }
    }
    else{
        NewClient.findByIdAndUpdate({_id: req.body._id}, req.body, {new: true}, function(){
            res.redirect('/' + req.body.designNumber);
        });
    }
});

router.get('/:clientEmail/:designNumber', function(req, res){
    NewClient.find({clientEmail: req.params.clientEmail}, function(err, data){
        res.render('./layouts/' + req.params.designNumber, {
            dataDBList: data
        });
    }).lean();
});

router.get('/deleteUser/:id/:designNumber/:email', function(req, res){
    NewClient.findByIdAndRemove(req.params.id, function(){
        fs.unlinkSync('personal images/' + req.params.email + '.jpg', function(){});
        res.redirect('/' + req.params.designNumber);
    });
});

module.exports = router;