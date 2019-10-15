const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) => {
    Car.find()
      .then(cars => res.json(cars))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  
  router.route('/add').post((req, res) => {
    console.log(req.body);
    const make = req.body.make;
    const model = req.body.model;
    const year =  req.body.year;
 
  
  
    const newCar = new Car({
      make,
      model,
      year,
    });
  
    newCar.save()
    .then(() => res.json('car added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
      .then(car => res.json(car))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Car.findByIdAndDelete(req.params.id)
      .then(() => res.json('Car deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Car.findById(req.params.id)
      .then(car => {
        car.make = req.body.make;
        car.model = req.body.model;
        car.year = Number(req.body.year);
  
        car.save()
          .then(() => res.json('car updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  })




module.exports = router;