var express = require('express'); // Web Framework
var app = express();

var sql = require('mysql'); // MS Sql Server client
const bodyparser= require('body-parser');
app.use(bodyparser.json());

// Connection string parameters.
var Dbconnect = sql.createConnection({
    port:'3306',
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'flackerdb'
});
Dbconnect.connect((err)=>{
    if(!err) {
        console.log("Db connected");
    } else {
        console.log("Error!!");
    }
    });

app.listen(4000,()=>console.log('Express running'));

app.get('/mission', (res)=>{
    Dbconnect.query('SELECT * FROM `mission',(err,rows)=>{
        if(!err){
        res.send(rows);
        console.log(res);
    } else console.log(err);
    })
});
