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

 const dateParsed = new Date(`${req.body.vals.date}T${req.body.vals.time}Z`)

schedule.scheduleJob(dateParsed, function(){
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
 })

return job 
});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});