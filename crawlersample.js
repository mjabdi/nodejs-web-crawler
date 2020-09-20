var Crawler = require("crawler");

var count = 0;
var errorCount = 0;

var c = new Crawler({
    maxConnections : 100,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
            errorCount++;
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
            count++;
            console.log("count : " + count);
        }
        done();
    }
});

// Queue just one URL, with default callback
for (var i =0 ; i< 20;i++)
{
    c.queue(['http://www.amazon.com/','http://www.google.com/','http://www.yahoo.com']);
}

c.on('drain',function(){
    console.log("Crawilng Finished...");
    console.log("Total Success : " + count);
    console.log("Total Errors : " + errorCount);
});

// Queue a list of URLs


// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,

//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);

// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);