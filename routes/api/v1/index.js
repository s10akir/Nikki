let express = require('express');
let router = express.Router();
const db = require('../../../models/contents.js');

router.get('/',function(req,res){
    res.json({
            message: "Hello World index"
    })
});

router.get('/show',function(req,res){
    var contents  = require('../../../models/contents.js');
    contents.find(function (err,contents){
        if(err)return console.error(err);
        console.log(contents);
        res.json(contents);
    });
});

router.get('/insert',function(req,res) {
    var contents  = require('../../../models/contents.js');

    var insContent = new contents({ title:'テストタイトル',content:"コンテンツ"});

    insContent.save(function(err,insContent){
        if(err)return console.error(err);
        console.log(insContent);
        res.json(insContent);
    });
});

module.exports = router;


router.post('/post',function(req,res){
        title = req.body.title;
        content = req.body.content;

    var contents  = require('../../../models/contents.js');
    var insContent = new contents({ title:title,content:content});
    insContent.save(function(err,insContent){
        if(err)return console.error(err);
        console.log(insContent);
        res.json(insContent);
    });
    res.redirect('/');
});
