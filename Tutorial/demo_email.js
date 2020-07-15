var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kimgh9407@gmail.com',
        pass: 'fygmeqykawhwknrh'
    }
});

var mailOptions = {
    from: 'kimgh9407@gmail.com',
    to: 'khkim9407@naver.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});