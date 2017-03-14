module.exports = {
  session: session
};

function session(req, res, next) {
  console.log(req.user)
  req.user ? res.json(req.user) : res.send(403)
};
