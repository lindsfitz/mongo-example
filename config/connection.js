const { connect, connection } = require('mongoose');

connect('mongodb://localhost/crochetDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;