const Photo = require('../models/Photo');

exports.pageAbout = (req, res) => {
  res.render('about');
};

exports.pageAdd = (req, res) => {
  res.render('add');
};

exports.pageEdit = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
