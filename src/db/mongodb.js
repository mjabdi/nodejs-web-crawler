const mongoose = require('mongoose');


module.exports = function()
{
    mongoose.connect('mongodb://localhost/drugsDB',{useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => {
        console.error("could not connect to MongoDB!");
        process.exit(1);
    });
}