'use strict'
const express = require('express');
const router = express.Router();
const Label = require('../models/label');
var data = require('./labelData.json');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/openaid');
var loadLabel = () => {

  for (let i = 0; i < data.length; i++) {
    var label = new Label();
    label.name = data[i].name;
    label.color = data[i].color;
    label.save((err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Done");
        }
    });

  }
}

loadLabel();