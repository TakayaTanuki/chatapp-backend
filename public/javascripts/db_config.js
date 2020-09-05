exports.mysql_setting = {
    host: '192.168.10.3',
    user: 'dev',
    password: 'Tanupon117',
    database: 'chat_app_db',
    timezone: 'jst'
};
exports.insertRecordSQL = 'INSERT INTO chat_histories(history_index,user_id,message,date_time) VALUES(?, ?, ?, ?)';
exports.getHistoriesSQL = 'SELECT * FROM chat_histories';
exports.deleteHistorySQL = 'TRUNCATE TABLE chat_histories';