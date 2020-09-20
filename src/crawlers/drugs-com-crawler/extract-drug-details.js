
const mongoose = require('mongoose');
const Crawler = require("crawler");
const {Link} = require('../../models/link');
const {Drug} = require('../../models/drug');

const html_text = require('cheerio-html-to-text');
const translate = require('../../services/translator');

const baseUrl = 'https://www.drugs.com';

 async function CrawlDetails()
{

    let _links = await Link.find({isCrawled : false});

    var c = new Crawler({
        maxConnections : 1,
        rateInterval : 1000,
        // This will be called for each crawled page
        callback : async function (error, res, done) {
            if(error){
                console.log(error);
            }else{
                var $ = res.$;
                const name = $('h1', 'div[class=contentBox]').text();
                const name_fa = await translate(name);
                console.log(name);


                const p1 = $('div.ddc-promo-sponsor-box').next().html();
                const p2 = $('div.ddc-promo-sponsor-box').next().next().html();
                const p3 = $('div.ddc-promo-sponsor-box').next().next().next().html();
                
                const desc1 = removeBraces(html_text.convert(p1));
                const desc1_fa = await translate(desc1);

                const desc2 = removeBraces(html_text.convert(p2));
                const desc2_fa = await translate(desc2);

                const desc3 = removeBraces(html_text.convert(p3));
                const desc3_fa = await translate(desc3);

                console.log(desc1);
                console.log(desc2);
                console.log(desc3);


                if (!await Drug.findOne( {name : name}))
                {
                    let _drug = new Drug({ 
                        name: name,
                        name_fa : name_fa,
                        desc1 : desc1,
                        desc1_fa : desc1_fa,
                        desc2 : desc2,
                        desc2_fa : desc2_fa,
                        desc3 : desc3,
                        desc3_fa : desc3_fa
                    });

                    _drug = await _drug.save();

                    let url = res.request.uri.href;
                    url = url.replace('https://www.drugs.com','');

                    // console.log({link : url});

                    await Link.findOneAndUpdate({link: url}, {$set:{isCrawled:true}});

                   console.log(_drug);
                }
            }
            done();
        }
    });

    for (var i=0; i < _links.length; i++)
    {
        c.queue(baseUrl + _links[i].link);
        console.log(baseUrl + _links[i].link);
    }

    c.on('drain',function(){
        console.log("Crawling All Details Done!");
    });
}


function removeBraces(str){
    return str.replace(/\[[^\[\]]*\]/g, '');  
  }
  

module.exports.CrawlDetails = CrawlDetails;






