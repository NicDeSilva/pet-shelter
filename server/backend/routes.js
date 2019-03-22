const petControllers = require('./controllers');
const path = require('path');

module.exports = app => {
  app
    .get('/api/pets', petControllers.getAllPets)
    .get('/api/pets/:id', petControllers.getOnePet)
    .get('/api/pets/name/:name', petControllers.getOnePetByName)
    .post('/api/pets', petControllers.createPet)
    .put('/api/pets/:id', petControllers.updatePet)
    .patch('/api/pets/:id', petControllers.likePet)
    .delete('/api/pets/:id', petControllers.deletePet)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("../public/dist/public/index.html"))
    });
}