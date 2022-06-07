const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const myZodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(myZodiac);
  })

  .get('/', (req, res) => {
    const allZodiacs = zodiacs.map((zodiac) => ({
      dates: zodiac.dates,
      name: zodiac.name,
    }));
    res.json(allZodiacs);
  });
