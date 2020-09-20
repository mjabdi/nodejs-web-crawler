const extract_names = require('./extract-names');
const extract_details = require('./extract-drug-details');

async function Run()
{
    // getCatArrays().forEach(element => {
    //     extract_names.CrawlNames(element);
    // });

    await extract_details.CrawlDetails();
}

function getCatArrays()
{
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

    cats = [];

    for (var i=0;i<alphabet.length;i++)
    {
        for (var j=0;j<alphabet.length;j++)
        {
            cats.push(alphabet[i] + alphabet[j] + ".html");
        }
    }

    return cats;


}


module.exports.Run = Run;
