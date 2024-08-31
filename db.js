const mongoose = require('mongoose');
const dburi = process.env.MONGODB_URI;

async function connectDB() {
  try {
    const connection = await mongoose.connect(dburi);
    console.log('Database connected');
  } catch (e) {
    console.log('Error while DB connection', e.message);
  }
}

module.exports = connectDB;
