const sq = require('sequelize');
exports.index = function (req, res, next) {
  res.render('landing', {
    title: "This is a title",
    posts: [{
      username: 'nzhope',
      content: 'This is my post'
    }]
  });
}
exports.submit_lead = function (req, res, next) {
  console.log("Lead email:", req.body.email);
  res.redirect('/');
}