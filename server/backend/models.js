const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/petshelter';

mongoose.connect(connectString, {useNewUrlParser:true})
  .catch(err => console.log(err));

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  type: {
    type:String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200
  },
  skill1: {
      type: String,
      maxlength: 20
  },
  skill2: {
    type: String,
    maxlength: 20
  },
  skill3: {
    type: String,
    maxlength: 20
  },
  likes: {
    type: Number,
    default: 0
  }

}, {timestamps:true});

module.exports = mongoose.model('Pet', PetSchema);