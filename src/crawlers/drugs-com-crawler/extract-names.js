
const mongoose = require('mongoose');
const Crawler = require("crawler");
const {Link} = require('../../models/link');

const baseUrl = 'https://www.drugs.com/alpha/';

 function CrawlNames(indexStr)
{
    var c = new Crawler({
        maxConnections : 100,
        // This will be called for each crawled page
        callback : function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res.$;
                $('a', 'ul.column-list-2').each(async function () {
                    var link = $(this).attr('href');
                    // console.log(link);
                    if (!await Link.findOne( {link : link}))
                    {
                        let _link = new Link({ 
                            link: link
                        });

                       _link = await _link.save();

                       console.log(_link);
                    }
                 });
            }
            done();
        }
    });

    c.queue(baseUrl + indexStr);

    c.on('drain',function(){
        console.log("Crawling " + indexStr + " Done!");
    });
}

module.exports.CrawlNames = CrawlNames;






