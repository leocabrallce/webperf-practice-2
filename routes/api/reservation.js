var express = require('express');
var router = express.Router();

/* GET reservations listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  // save received reservation in text file
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname, '../../data/reservations.txt');
  const reservation = req.body;
  const reservationString = JSON.stringify(reservation);

  fs.appendFile(filePath, reservationString + '\n', function (err) {
    if (err) {
      console.log(err);
      res.status(500).send('Error saving reservation');
    } else {
      res.status(201).send('Reservation saved');
    }
  });
});

module.exports = router;
