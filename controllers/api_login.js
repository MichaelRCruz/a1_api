module.exports = {
  index: index
};

// function index(req, res, next) {
//   req.user._id ? res.json({}) : res.send(403)
// };

function index(req, res, next) {
  req.user ? res.json({}) : res.send(403)
};
