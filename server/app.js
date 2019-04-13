const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const bucketlist = require('./routes/serv');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

//Connect mongoose to our database

//Declaring Port
const port = 3001;

//Initialize our app variable
const app = express();

//Middleware for CORS
//app.use(cors());

//Middlewares for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files

*/
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api',bucketlist);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//Routing all HTTP requests to /bucketlist to bucketlist controller


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

const server = http.createServer(app);

//Listen to port 3000
server.listen(port, () => console.log(`API running on localhost:${port}`));