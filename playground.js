const translate = require('./src/services/translator');

// translate('hello world!').then((result) => {

//     console.log(result);

// }).catch((err) => console.error(err));

// translate("hi").then( (result) => {
//     console.log(result);
// }).catch( (err) => console.error(err) );

async function run()
{

        for (var i=0; i< 100 ; i++)
        {
            try{
                console.log(await translate('Hi Mohammad'));
                console.log(await translate('Do not swallow. If product is accidentally swallowed in quantities greater than would normally occur with a treatment gel, seek medical help or contact a Poison Control Center right away.'));
                console.log(await translate('Keep out of reach of children.'));
                console.log(await translate('Shake well before use. This is a one minute or four minute fluoride gel for in-office patient use. It is normally used as a preventative caries treatment two times a year.'));
            }
            catch(exp)
            {
                console.log(exp);
            }
        }
    }



run();


// function removeBraces(str){
//     return str.replace(/\[[^\[\]]*\]/g, '');  
//   }
  

//   console.log(removeBraces('Medically reviewed[/support/editorial_policy.html#editorial-staff] by Drugs.comon May 22, 2018 – Written by CernerMultum[/support/editorial_policy.html#Cerner]'));