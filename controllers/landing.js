exports.index = function (req, res, next) {
  res.render('landing', {
    title: "This is a title"
  });
}