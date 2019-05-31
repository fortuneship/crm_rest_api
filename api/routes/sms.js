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

  
  const from = 'Nexmo';
  let to = req.body.number;
  let text = req.body.message;


    sendSms(from, to, text);    
});

  const sendSms = (senderName, phoneNumber, message) => {

    console.log(`Bulk Message from ${senderName} to ${phoneNumber} with message ${message}`);

    // Loop through each number
    for(let i = 0; i < phoneNumber.length; i++){
      let number = phoneNumber[i];
      console.log(number);

      // ensure number start with country code. case Nigeria(234)
      number = number.startsWith('0') ? number.replace('0', '234') : number;

      

       console.log(number);
      // nexmo.message.sendSms(senderName, number, message, (err, result) => {
      //   if(err) console.log(err);
      //   console.log(result);

      //   //Send a server response when message has been sent successfully to the last number
      //   if(i === phoneNumber.length - 1){
      //     console.log('message sent');
      //   }
      // });
    }
    
  };

module.exports = router;




