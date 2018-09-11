const _ = require('lodash');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const canUseDatabase = require('../middlewares/canUseDatabase');

const Note = mongoose.model('notes');

module.exports = app => {
  // transferring data from localstorage to mongodb at mlab
  app.post('/api/notes', canUseDatabase, async (req, res) => {

    const { category, name, purpose, code } = req.body;

    const note = new Note({
      category,
      name,
      purpose,
      code
    });

    try {
      await note.save();
      res.send(note);
    } catch (err) {
      res.status(422).send(err);
    }

  });

  app.get('/api/notes', canUseDatabase, async (req, res) => {

    try {
      const notes = await Note.find({});
      res.send(notes);
    } catch (err) {
      res.status(422).send(err);
    }

  });

  app.get('/api/mongo-notes', async (req, res) => {
    if(req.user){
      if (req.user._id.toString() === keys.mongoUserID.toString()){
        try {
          const notes = await Note.find({});
          res.send(notes);
        } catch (err) {
          res.status(422).send(err);
        }
      }
    }

    res.send([
    {"category":"category1","name":"Title 1","purpose":"Description or purpose for Title 1","code":"Code"},
    {"category":"category1","name":"Title 2","purpose":"Description or purpose for Title 2","code":"Code"},
    {"category":"category1","name":"Title 3","purpose":"Description or purpose for Title 3","code":"Code"},
    {"category":"category2","name":"Title 4","purpose":"Description or purpose for Title 4","code":"Code"},
    {"category":"category2","name":"Title 5","purpose":"Description or purpose for Title 5","code":"Code"},
    {"category":"category2","name":"Title 6","purpose":"Description or purpose for Title 6","code":"Code"}
    ]);
  });

  app.get('/api/notes/categories', canUseDatabase, async (req, res) => {

    try {
      const categories = await Note.distinct('category');
      res.send(categories);
    } catch (err) {
      res.status(422).send(err);
    }

  });
}
