var express = require('express');
var router = express.Router();

var mysql = require('mysql');

// MySQLの設定情報
var mysql_setting = {
    host: '192.168.10.3',
    user: 'dev',
    password: 'Tanupon117',
    database: 'chat_app_db'
};

/* GET home page. */
router.post('/', function (req, res, next) {

    // フロントからのパラメータ取得
    const userId = req.body.userId;
    const password = req.body.password;

    // コネクションの用意
    const connection = mysql.createConnection(mysql_setting);

    const loginSQL = 'SELECT * from user_informations where user_id=? AND password=?'

    connection.query(loginSQL, [userId, password],
        function (error, results, fields) {
            console.log(results);
            if (results.length >= 1) {
                res.send('OK');
            } else {
                res.send('NG');
            }
        }
    );
});

module.exports = router;
