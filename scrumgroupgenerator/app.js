const http = require('http');
const express = require('express');
const generate = require('./generator');

const app = express();
const port = 80;

const AWSXRay = require('aws-xray-sdk');
const XRayExpress = AWSXRay.express;
app.use(XRayExpress.openSegment('Scrumgroups'));

app.get('/', (req, res) => res.send(JSON.stringify(generate())));

app.use(XRayExpress.closeSegment());

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))