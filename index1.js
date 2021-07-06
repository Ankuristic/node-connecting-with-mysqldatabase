const mysql =require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json);


app.listen(3000,()=>console.log('express server is running at port no3000'));

const pool=mysql.createPool({
    connectionLimit:5,
    host:'localhost',
    user:'root',
    password:'password',
    database:'employee'
  })
  
  app.get('/employee',(req,res)=>{
    pool.getConnection((err,connection)=>{
      if(err) throw err
      console.log('connected as id ${connection.threadId')
  
      //query(sqlString, callback)
      connection.query('SELECT * from employee',(err,rows) => {
        connection.release()
  
        if(!err) {
          res.send(rows)
  
        } else {
          console.log(err)
        }
      })
  
    })
  
  })