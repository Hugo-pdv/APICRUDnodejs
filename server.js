
// Importation des modules nécessaires
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

// Importation des routes de l'API
const apiRoutes = require('./routes/api'); 

// Utilisation des middlewares
app.use(cors()); 
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// Connexion à MongoDB
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
      console.log('Connecté à MongoDB')
      app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`)
      });
  })
  .catch(err => console.log(err));






