const express = require ('express');
const mongoose = require('mongoose');
const AuthRouter = require('./routers/Auth')
const dbConfig = require('./config/db.config');
const bodyPrser=require('body-parser')
const app = express();
app.use(bodyPrser.json());
app.use(bodyPrser.urlencoded({extended : true}));


app.get('/api',(req,res)=> res.send('its working'));

app.listen(process.env.port || 4000,function(){
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

  app.use('/api',AuthRouter)

