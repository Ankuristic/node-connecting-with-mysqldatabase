const mysql =require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json);

var mysqlConnection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'host',
    password:'1234',
    database:'employee',
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('db connection');
    else
    console.log('db connection failed \n error:'+JSON.stringify(err,undefined,2));
});


app.listen(3000,()=>console.log('express server is running at port no3000'));

//GET ALL EMPLOYEES
app.get('/employee',(req,res)=>{
  mysqlConnection.query('SELECT* FROM EMPLOYEE',(err,rows,fields)=>{
      if(!err)
      console.log(rows);
      else
      console.log(err);


  })

});

//Get an employees
//employee/1
app.get('/employee/:id',(req,res)=>{
    mysqlConnection.query('SELECT* FROM EMPLOYEE WHERE EMPID=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
  
  
    })
  
  });

//Delete an employee 
app.delete('/employee/:id',(req,res)=>{
    mysqlConnection.query(' DELETE FROM  EMPLOYEE WHERE EMPID=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        console.log('deleted successsfully');
        else
        console.log(err);
    })
  
  });

//iNSERT AN EMPLOYEE
app.post('/employee',(req,res)=>{
    var sql= "SET @EmpID=?; SET @Name=?;@EmpCode=?;SET @Salary=?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary] ,(err,rows,fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
  
  });

  // update an employee 

  app.put('/employee',(req,res)=>{
    var sql= "SET @EmpID=?; SET @Name=?;@EmpCode=?;SET @Salary=?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary] ,(err,rows,fields)=>{
        if(!err)
        res.send ('updated successfully');
        else
        console.log(err);
    })
  
  });