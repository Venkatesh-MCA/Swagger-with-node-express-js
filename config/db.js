const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
      //bufferMaxEntries: 0,
      //connectTimeoutMS: 10000,
      //socketTimeoutMS: 45000,
 
   
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
