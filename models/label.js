const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const LabelSchema = new Schema({
  name: {type: String, required: true},
  color: {type: String, required: true}
});

module.exports = mongoose.model('Label', LabelSchema);