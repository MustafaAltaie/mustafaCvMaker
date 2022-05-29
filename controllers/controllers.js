const express = require('express');
const router = express.Router();
const fs = require('fs');

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

router.get('/register', function(req, res){
    res.render('./layouts/register');
});


router.get('/authorization/:id', function(req, res){
    fs.readFile('passcode.txt', 'utf8' , (err, passCode) => {
        if(req.params.id == passCode){
            var newPassCode = Math.ceil(Math.random()*9999) + 10000;
            fs.writeFile('passcode.txt', newPassCode.toString(), function(){
                res.redirect('/authorizationSucceeded');
            });
        }
        else
        res.redirect('/register');
    });
});

router.get('/authorizationSucceeded', function(req, res){
    res.render('./layouts/getAuthorizedPage');
});

router.get('/4435966mustafa', function(req, res){
    fs.readFile('passcode.txt', 'utf8' , (err, passCodeData) => {
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

router.get('/cvCreated/:name/:date/:redirect', function(req, res){
    fs.writeFileSync('cvs/' + req.params.name + '.txt', req.params.date, function(){});
    if(req.params.redirect == 'home')
    res.redirect('/');
    else
    res.redirect('/' + req.params.redirect);
});

router.get('/allCvs', function(req, res){
    fs.readdir('cvs', function(err, files){
        res.render('./layouts/allCvc', {
            fileList: files
        });
    });
});

module.exports = router;