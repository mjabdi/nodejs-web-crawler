const express = require('express');
const app = express();

const drugsCrawler = require('./crawlers/drugs-com-crawler/index');

require('./db/mongodb')();


drugsCrawler.Run();














