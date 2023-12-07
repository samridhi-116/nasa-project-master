const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
// const MONGO_URL = process.env.MONGO_URL;
// const MONGO_URL = "mongodb+srv://samridhi-11:PyK1jAIQF64dtMYT@cluster0.jghmjkm.mongodb.net/?retryWrites=true&w=majority"

const MONGO_URL = "mongodb+srv://itssamridhi1412:UnAJRBtxHGc6l1tg@cluster0.ql1oblr.mongodb.net/?retryWrites=true&w=majority"
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}