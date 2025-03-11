const mysql = require('mysql');

//create connection 
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'collage'
});

//connect to db
con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});

//create table                                //, primary key(id)
const createUserSql = `CREATE TABLE IF NOT EXISTS users (id int not null, name varchar(255), email varchar(255), password varchar(255))`;
con.query(createUserSql, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('table created');
    }
});

//export connection
module.exports = {
    con
};