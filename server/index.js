const server = require('.\/server');

function getIndex() {
  server.server.get('/', (req, res) => {
    res.render('index');
  });
}

module.exports = {
  getIndex
}
