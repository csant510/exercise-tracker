const router = require('express').Router();
let Exercise = require('../models/maintenance.model');

router.route('/').get((req, res) => {
    maintenance.find()
      .then(maintenance => res.json(maintenance))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/add').post((req, res) => {
    const model = req.body.model;
    const date = Date.parse(req.body.date);
    const oil = req.body.oil;
    const fluid = req.body.fluid;
    const tireRoation = req.body.tireRoation;
    const description = req.body.description;
    const price = Number(req.body.price);
   
  
    const newMaintenance = new Maintenance({
      model,
      date,
      oil,
      fluid,
      tireRoation,
      description,
      price,
    });
  
    newMaintenance.save()
    .then(() => res.json('Maintenance added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Maintenance.findById(req.params.id)
      .then(maintenance => res.json(maintenance))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Maintenance.findByIdAndDelete(req.params.id)
      .then(() => res.json('Maintenance deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(maintenance => {
        maintenance.model = req.body.model;
        maintenance.date = Date.parse(req.body.date);
        maintenance.oil = req.body.oil;
        maintenance.fluid = req.body.fluid;
        maintenance.tireRoation = req.body.tireRoation;
        maintenance.description = req.body.description;
        maintenance.price = Number(req.body.price);
       
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;