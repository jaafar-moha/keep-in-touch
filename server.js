const express = require ('express');
const mongoose = require('mongoose');
const CoRouter = require('./routers/contact')
const dbConfig = require('./config/db.config');
const bodyPrser=require('body-parser');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors())
app.get('/api',(req,res)=> res.send('its working'));

app.listen(process.env.port || 3000,function(){
    console.log('now listening for requests')
});

mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
  });

  app.use('/api',CoRouter)

