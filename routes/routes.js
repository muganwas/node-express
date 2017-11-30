const express = require('express');
const app = express();
const home_title = "Muganwas Express";
const about_title = "About Muganwas";
const vd = require('../videodata.json');

module.exports = {
    home: (req, res)=>{res.render('index', {title: home_title,videodata:vd})},
    about: (req, res)=>{res.render('about', {title: about_title})},
}