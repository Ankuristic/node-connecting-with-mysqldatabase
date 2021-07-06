const express= require("express");
const app= express();
const port=process.env.PORT|| 4000;

// app.get("/students",(req,res) => {
//     res.send("hello from.");
// })

app.get('/students', function (req, res) {
    res.send('GET request to the homepage')
  })

  app.post('/students', function (req, res) {
    res.send('post request to the homepage')
  })

  app.put('/students',function(req,res){
    res.send('put request has deleted')
  })
  
  app.delete('/students',function(req,res){
    res.send('delete')
  })


app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})