/* SERVER SETTINGS */
const express = require('express');
const server = express();
const port = 80;

const bodyParser = require('body-parser');

server.set('view engine', 'ejs');
server.set('views', 'client\/html');

server.use(express.static('client\/css'));

server.use(bodyParser.urlencoded({extended: false}));  // POST 방식 셋팅
/* SERVER SETTINGS */


/* DATABASE SETTINGS */
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Sunhyisu344774',
  database: 'project-1',
  port: '3474'
});
/* DATABASE SETTINGS */

/* connection.query('SELECT * FROM `project-1`.accounts;', function (error, results, fields) {
  if (error) {
    console.log("DB연동 중 에러 발생! 아래 에러 코드 확인 요망");
    console.log(error);
  } else {
    console.log("DB연동 작업 완료! 아래 결과 확인 요망");
    console.log(results);
  }
}); */

module.exports = {
  express,
  server,
  port,
  mysql,
  connection
}
