const express=require('express');
const app=express();
const port =8000;


app.listen(port,function(err){
      if(err) console.log(`error in listening at port ${port}`);
      console.log(`server is running at port ${port}`);
})