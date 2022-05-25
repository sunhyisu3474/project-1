const server = require('.\/server');

function moveSignup() {
  server.server.get('/signup', (req, res) => {
    return res.render('signup');
  });
}

function createAccount() {
  const SQL_INSERT_ACCOUNT = `INSERT INTO accounts(email, pw) VALUES(?, ?)`;
  server.server.post('/signup', (request, response) => {
    server.connection.query(SQL_INSERT_ACCOUNT, [request.body.inputEmail, request.body.inputPW], (error, results, fields) => {
      if (error) {
        console.log("DB연동 중 에러 발생! 아래 에러 코드 확인 요망");
        console.log(error);
      } else {
        console.log("DB연동 작업 완료! 아래 결과 확인 요망");
        console.log(results);
      }
    });
  });
}

module.exports = {
  moveSignup,
  createAccount
}
