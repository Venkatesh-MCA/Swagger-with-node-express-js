const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({

  StuentName: {
    type: String
  },
  StuentMobile: {
    type: String
  },
  StuentEmail: {
    type: String
  }
})

module.exports = mongoose.model('student', studentschema, 'student')
