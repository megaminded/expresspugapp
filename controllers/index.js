exports.index = function (req, res, next) {
  res.render('index', {
    title: "This is a title"
  });
}