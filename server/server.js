const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://urbanik.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://localhost:3001',
    issuer: "https://urbanik.eu.auth0.com/",
    algorithms: ['RS256'],
    responseType: 'id_token token'
});

app.post('/api/message/add', (req, res) => {
    console.log(req.body)
    fs.writeFile('messages.json', JSON.stringify(req.body), 'utf8', () => {
      res.json(req.body);
    })
})

app.get('/api/message/show', (req, res) => {
    fs.readFile('messages.json', 'utf8',(err, data) => {
    res.json(JSON.parse(data));
    });
})

app.post('/api/users/add', (req, res) => {
    //let stringify = JSON.stringify(req.body);
    fs.writeFile('users.json', JSON.stringify(req.body), 'utf8', function(err, data) {
    console.log(req.body);
    });
})

app.get('/api/users/show', (req, res) => {
    fs.readFile('users.json', 'utf8',(err, data) => {
    res.json(JSON.parse(data));
    });
})

app.post('/api/users/getdirs', (req, res) => {
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
    
app.post('/api/users/create', (req, res) => {
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

app.listen(3001);
console.log('serving on localhost:3001')