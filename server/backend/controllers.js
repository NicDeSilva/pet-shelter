const Pet = require('./models');
// const path = require('path');

module.exports = {

  getAllPets: (req, res) => {
    Pet.find({}, null, {sort: {type: 1}})
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOnePet: (req, res) => {
    const ID = req.params.id;
    Pet.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOnePetByName: (req, res) => {
    const petName = req.params.name;
    Pet.findOne({name: petName})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createPet: (req, res) => {
    const formData = req.body;
    Pet.create(formData)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updatePet: (req, res) => {
    const ID = req.params.id;
    const formData = req.body;
    Pet.findOneAndUpdate({_id:ID}, formData, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  likePet: (req,res) => {
    const ID = req.params.id;
    Pet.findOneAndUpdate({_id:ID}, {$inc: {'likes':1}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deletePet: (req, res) => {
    const ID = req.params.id;
    Pet.deleteOne({_id:ID})
      .then(result => res.json(result))
      .catch(errors => res.json(errors));
  }

};