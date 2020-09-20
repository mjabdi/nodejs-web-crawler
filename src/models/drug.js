const mongoose = require('mongoose');

const Drug = mongoose.model('Drug', new mongoose.Schema({
  name : {
    type: String,
    minlength: 1,
    maxlength: 250,
  },  
  name_fa : {
    type: String,
    minlength: 0,
    maxlength: 250,
  }, 
  desc1 : {
    type: String,
    minlength: 0,
    maxlength: 1000,
  },  
  desc1_fa : {
    type: String,
    minlength: 0,
    maxlength: 1000,
  }, 
  desc2 : {
    type: String,
    minlength: 0,
    maxlength: 1000,
  },  
  desc2_fa : {
    type: String,
    minlength: 0,
    maxlength: 1000,
  }, 
  desc3 : {
    type: String,
    minlength: 0,
    maxlength: 1000,
  },  
  desc3_fa : {
    type: String,
    minlength: 0,
    maxlength: 1000,
  }, 
}));


exports.Drug = Drug; 