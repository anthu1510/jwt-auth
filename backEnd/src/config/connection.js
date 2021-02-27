const mysql = require('mysql');

const con = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER_NAME,
    password : process.env.PASSWORD,
    database : process.env.DB_NAME
});


con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
})

