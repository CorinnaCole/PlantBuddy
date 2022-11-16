const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/plantsbuddy');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});


const plantSchema = mongoose.Schema({
  userId: Number,
  firstName: String,
  commonName: String,
  scientificName: String,
  wikiUrl: String,
  myImage: String,
  // associatedImages: [],
});

const Plant = mongoose.model('Plant', plantSchema);


module.exports = { Plant };