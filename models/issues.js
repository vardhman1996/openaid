const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const IssuesSchema = new Schema({
  title: {type: String, required: true},
  body : {type: String, required: false},
  html_url: {type: String, required: true},
  userid: {type: Number, required: true},
  repoid: {type: Number, required: true},
  labels: []
});

module.exports = mongoose.model('Issues', IssuesSchema);
