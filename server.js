'use strict';
import routes from './routes/.';
import express  from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
var upload = multer();
var app = express();
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 

app.use(express.static('./public'));

routes(app);
app.listen(process.env.PORT || 3000);
