const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const IssuesSchema = new Schema({
  title: {type: String, required: true},
  body : {type: String, required: false},
  html_url: {type: String, required: true},
  username: {type: String, required: true},
  reponame: {type: String, required: true},
  labels: []
});

module.exports = mongoose.model('Issues', IssuesSchema);
