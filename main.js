const server = require('.\/server\/server');
const index = require('.\/server\/index');
const signup = require('./server/signup');

server.server.listen(server.port);

index.getIndex();

signup.moveSignup();
signup.createAccount();
