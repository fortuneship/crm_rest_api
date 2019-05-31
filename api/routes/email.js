const express = require("express");
const mailgun = require("mailgun-js");

const DOMAIN = "sandbox54efd18a31534627a410e00d5256e9aa.mailgun.org";
const mg = mailgun({apiKey: "f150fa3fe460ee233645adec6d607ef8-39bc661a-2b6e5621", domain: DOMAIN});


const router = express.Router();

router.post('/', (req, res) => {

    const to = req.body.to;
    const text = req.body.text;


    sendEmail(to, text);
    console.log(`send email: ${to}`);
    console.log(`send email: ${text}`);

});

const sendEmail = (reciepient, message) => {

    console.log(`${reciepient} and ${message}`);

    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox54efd18a31534627a410e00d5256e9aa.mailgun.org>",
        reciepient: reciepient,
        subject: "Hello",
        message: message
    };
    console.log(data.reciepient);
    // mg.messages().send(data, function (error, body) {
    //     console.log(body);
    // });
};

module.exports = router;

// const DOMAIN = "sandbox54efd18a31534627a410e00d5256e9aa.mailgun.org";
// const mg = mailgun({apiKey: "f150fa3fe460ee233645adec6d607ef8-39bc661a-2b6e5621", domain: DOMAIN});

// const data = {
// 	from: "Mailgun Sandbox <postmaster@sandbox54efd18a31534627a410e00d5256e9aa.mailgun.org>",
// 	to: "tunde8983@gmail.com",
// 	subject: "Hello",
// 	text: "Testing some Mailgun awesomness!"
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });