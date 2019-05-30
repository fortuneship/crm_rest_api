const express = require("express");
import Nexmo from 'nexmo';

const nexmo = new Nexmo({
    apiKey: 'a8a9c5fc',
    apiSecret: '1GUceqQeJTplyUV1'
  });

//   const sendSms = () => {

//     const from = 'Nexmo'
//     const to = '2347037665917'
//     const text = 'Hello from Nexmo'
  
//     nexmo.message.sendSms(from, to, text)
//   };
  
//   sendSms();

const router = express.Router();

router.post('/', (req, res) => {
    // const from = 'Nexmo'
    // const to = '2347037665917'
    // const text = 'Hello from Nexmo'
    const from = 'Nexmo'
    const to = req.body.number;
    const text = req.body.message;

    nexmo.message.sendSms(from, to, text)
});

module.exports = router;




