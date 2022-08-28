const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const schedule = require('node-schedule');


require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
   type: "OAuth2",
   user: process.env.EMAIL,
   pass: process.env.WORD,
   clientId: process.env.OAUTH_CLIENTID,
   clientSecret: process.env.OAUTH_CLIENT_SECRET,
   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
 },
});
transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`server ready ${success}`);
});

app.post("/send", function (req, res) {
 let mailOptions = {
   from: `${req.body.vals.email}`,
   to: process.env.EMAIL,
   subject: 'New Reminder',
   html: `${req.body.vals.date} ${req.body.vals.time} ${req.body.vals.reminder}`,
 };


 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("email sent");
     res.json({
       status: "success",
     });
   }
 });
});

// put the date and time into a variable and then pass down 

/*
const schedule = require('node-schedule');
const date = new Date(2012, 11, 21, 5, 30, 0);

const job = schedule.scheduleJob(date, function(){
  console.log('The world is going to end today.');
});
*/
/*schedule.scheduleJob(req.body.vals.date, function(){
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("email sent");
      res.json({
        status: "success",
      });
    }
  });
 });*/

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});