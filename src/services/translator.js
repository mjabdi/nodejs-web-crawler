const puppeteer = require('puppeteer');
const $ = require('cheerio');
const baseUrl = 'https://translate.google.com/#view=home&op=translate&sl=en&tl=fa&text=';
const persianjs = require('persianjs');

module.exports = function(val)
{
    return new Promise(function (resolve, reject) {

        const url = baseUrl + val;

        puppeteer.launch().then(function(browser) {
          browser.newPage().then(function(page) {
              page.goto(url).then(function() {
                  
                  page.$eval('span.tlid-translation', function(heading) {

                      return heading.innerText;
                  
       
                  }).then(function(result) {
                      browser.close();
                      resolve(result);
                  }).catch( () => resolve('') );
              }).catch(function(err) {
                reject(err);
              });
          });
      }).catch(function(err) {
          reject(err);
        });
    });
}