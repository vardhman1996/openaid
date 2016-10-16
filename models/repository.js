const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const RepositorySchema = new Schema({
  name: {type: String, required: true},
  description : {type: String, required: false},
  html_url: {type: String, required: true},
  userid: {type: Number, required: true},
<<<<<<< HEAD
  user_name: {type: String, required: true},
=======
  username: {type: String, required: true},
>>>>>>> d183b5a9d42daafdca3438f1ea40186d8c5a77c3
  repoid: {type: Number, required: true}
});

module.exports = mongoose.model('Repository', RepositorySchema);
