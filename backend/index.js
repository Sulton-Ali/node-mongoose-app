const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

const start = async () => {

  try {
    await mongoose.connect('mongodb+srv://aliadmin:382PjTo0TQx1Qjex@cluster0.bcfpg.mongodb.net/node-mongoose-app?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(e) {
    console.log(e);
  }

};


start();
