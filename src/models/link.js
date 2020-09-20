const mongoose = require('mongoose');

const Link = mongoose.model('Link', new mongoose.Schema({
  site : {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
    default: 'www.drugs.com'
  },  
  link: {
    type: String,
    required: true,
    unique : true,
    minlength: 1,
    maxlength: 250
  },
  isCrawled: {
    type: Boolean,
    default: false
  }
}));


exports.Link = Link; 