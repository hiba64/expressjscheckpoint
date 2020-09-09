const express = require("express");
const app = express();
app.use(date=(req,res,next)=>{
  let requestDate=new Date();
  let requestDay= requestDate.getDay();
  let requestHours= requestDate.getHours();
  console.log(requestDate,requestDay,requestHours)
  if(requestDay<=5 && requestHours>=9 && requestHours<=17){
      console.log('availble')
      next()}
      else
      {console.log('not available');
      }
     })


app.listen(3000, function (err) {
  if (err) console.log("server not running");
  else console.log("server running in port 3000.");
});

 
app.use(express.static(__dirname + "/folders"));
//app.get("/home", (req, res) => {
  
  //    res.sendFile(__dirname + "/folders/Home.html");
    //} );
    
//app.get("/contact", (req, res) => {
  
  //  res.sendFile(__dirname + "/folders/Contactus.html");
 // } );