module.exports = {
  index: index
};

function index(req, res, next) {
  req.user ? res.json({}) : res.send(403)
};
