//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/message/add', (req, res) => {
    fs.writeFile('messages.json', JSON.stringify(req.body), 'utf8', () => {
      res.json(req.body);
    })
})

router.get('/message/show', (req, res) => {
    fs.readFile('messages.json', 'utf8',(err, data) => {
    res.json(JSON.parse(data));
    });
})

router.post('/users/add', (req, res) => {
    //let stringify = JSON.stringify(req.body);
    fs.writeFile('users.json', JSON.stringify(req.body), 'utf8', function(err, data) {
    console.log(req.body);
    });
})

router.get('/users/show', (req, res) => {
    fs.readFile('users.json', 'utf8',(err, data) => {
    res.json(JSON.parse(data));
    });
})

router.post('/users/getdirs', (req, res) => {
    const testFolder = './';
    let dirStatus = false;
    const fileName = sortNames(req.body.fileName);
    fs.readdir(testFolder,(err, files) => {
        for (let file of files) {
            if (fileName == file) {
                dirStatus = true;
            }
        }
        if (dirStatus) {
            fs.readFile(fileName, 'utf8',(err, data) => {
                console.log(data);
                res.json(JSON.parse(data));
            });
        } else {
                let response = JSON.parse(JSON.stringify([{'content': '','user':''}]));
                res.json(response);
            }
        })
})
    
router.post('/users/create', (req, res) => {
    const fileName = sortNames(req.body.fileName);
    fs.appendFile(fileName, '',(err) => {
        if (err) throw err;
        fs.writeFile(fileName, JSON.stringify(req.body.messages), 'utf8', () => {
            res.json(req.body.messages);
        })
    })
})

function sortNames(string) {
    let fileNameNew = string.split('.').join("");
    let filesArray = fileNameNew.split('&');
    filesArray.sort();
    let fileName = filesArray[0] + filesArray[1];
    return fileName + '.json';
}

module.exports = router;