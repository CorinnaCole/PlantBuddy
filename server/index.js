const express = require('express');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');
const { PlantNetApiKey } = require('../env.js');
const app = express();
const PORT = 3000;

const PROJECT = 'all'; // try 'weurope' or 'canada'
const API_URL = 'https://my-api.plantnet.org/v2/identify/' + PROJECT + '?api-key=';
const API_PRIVATE_KEY = PlantNetApiKey;
const API_SIMSEARCH_OPTION = '&include-related-images=true'; // optional: get most similar images
const API_LANG = '&lang=fr'; // default: en
const LEAF = 'leaf';

const { savePlant, getPlants } = require('./plantsDbService.js')
// const { api } = require('../client/src/config/config.js');
// require('dotenv').config();
// var compression = require('compression');

// app.use(compression());
app.use('/:userId', express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ extended: false }));

// app.use(bodyParser.json());
app.get('/:userId/plants', async (req, res) => {

  try {
    const data = await getPlants(req.params.userId);
    res.send(data.reverse()).end();

  } catch (err) {
    console.log('err in get ', err);
  }
})

app.post('/:userId/plants', async (req, res) => {
  const filepath = `/tmp/buddy_${new Date().valueOf()}`
  const firstImage = req.body.images[0];
  await fs.writeFileSync(filepath, Buffer.from(firstImage.data_url.split(',')[1], 'base64'))
  try {

    const plantData = await getPlantData(filepath)

    const wikiSummary = await getWikiSummary(plantData.results[0].species.scientificNameWithoutAuthor)

    console.log(wikiSummary, 'wikiSummary');

    await savePlant(plantData, firstImage.data_url, req.params.userId, req.body.firstName, wikiSummary);
    res.sendStatus(200).end();

  } catch (err) {
    console.log('route errors and data errors', err)
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const getWikiSummary = async (scientificName) => {
  try {
    let queryName = scientificName.split(' ').join('_');
    const summary = await axios({
      method: 'get',
      url: `https://en.wikipedia.org/api/rest_v1/page/summary/${queryName}`
    })
    return summary.data.extract;
  }
  catch (err) {
    console.log('error inside the getWikiSummary', err);
    throw err;
  }
}

const getPlantData = async (filepath) => {
  let form = new FormData();
  form.append('organs', LEAF);
  form.append('images', fs.createReadStream(filepath));

  try {
    const { status, data } = await axios.post(
      API_URL + API_PRIVATE_KEY,
      form,
      { headers: form.getHeaders() }
    );
    return data;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}