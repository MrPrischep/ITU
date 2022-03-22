import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import routes from "./routes";
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var fileUpload = require('express-fileupload');

const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: 100 * 1024 * 1024}));
app.use(express.urlencoded({
    limit: 100 * 1024 * 1024,
    extended: false
}));
app.use(express.static('public'));
app.use(fileUpload({
    limits: {
        fileSize: 100 * 1024 * 1024,
        abortOnLimit: true
    },
    useTempFiles : true,
    tempFileDir : __dirname + '/../temp/'
}));
app.use(session({
    store: new FileStore,
    secret: 'iis',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin:[
        'http://localhost',
        'http://localhost:3000',
        'http://localhost:80',
        'http://167.172.175.231:3000',
        'http://167.172.175.231',
        'http://167.172.175.231:80',
        'https://167.172.175.231'
    ],
    methods:['GET','POST','PUT','DELETE'],
    credentials: true // enable set cookie
}));
app.options('*', cors());

routes(app);

export default app;
