const { Plant } = require('../database/index.js');

const savePlant = async (plantData, b64Image, userId, name, summary) => {
  const tempPlant = {
    firstName: name,
    scientificName: plantData.results[0].species.scientificNameWithoutAuthor,
    commonName: plantData.results[0].species.commonNames[0],
    myImage: b64Image,
    userId,
    wikiSummary: summary
  };
  let plantBuddy = new Plant(tempPlant);

  return plantBuddy.save();
};

const getPlants = async (id) => {
  return Plant.find({userId: id})
};



// const plantSchema = mongoose.Schema({
//   userId: Number,
//   firstName: String,
//   commonName: String,
//   scientificName: String,
//   wikiUrl: String,
//   myImage: String,
//   // associatedImages: [],
// });

module.exports = {
  savePlant,
  getPlants

};
