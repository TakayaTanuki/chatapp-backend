var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加


// MySQLの設定情報
var mysql_setting = {
  host: '192.168.10.3',
  user: 'dev',
  password: 'Tanupon117',
  database: 'chat_app_db'
};

// 削除フォームの送信処理
router.post('/', (req, res, next) => {

  // データベースの設定情報
  var connection = mysql.createConnection(mysql_setting);

  // データベースに接続
  connection.connect();

  // データを取り出す
  connection.query('truncate table chat_histories;', function (error, results, fields) {
    console.log(error,results)
  });


  // 接続を解除
  connection.end();
});

module.exports = router;
