const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
  }


  const lconfigSchema = mongoose.Schema({
    _id: reqString,
    lconfig: {
        type: Boolean,
        required: true,
    }
  })

  module.exports = mongoose.model('lconfigs', lconfigSchema)
