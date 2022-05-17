const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res){
    fs.readdir('personal images', function(err, imageFiles){
        res.render('./layouts/index', {
            imageFiles: imageFiles
        });
    });
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