const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const RepositorySchema = new Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  name: {type: String, required: true},
  link: {type: String, required: true},
  labels: [String]
});

module.exports = mongoose.model('Repository', RepositorySchema);
