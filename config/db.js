const mongoose = require('mongoose')
require('dotenv').config()
const DB = process.env.MONGO_URI

const connectDb = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    console.log('MongoDb connected!')
  } catch (err) {
    console.log('Error: ' + err.message)

    process.exit(1)
  }
}

module.exports = connectDb