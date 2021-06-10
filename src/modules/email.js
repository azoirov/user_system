// const nodemailer = require("nodemailer");

// const { EMAIL } = require("../../config");
// const { PASSWORD } = require("../../config");

// console.log(EMAIL, PASSWORD);

// module.exports = {
//   sendEmail: (userEmail, verificationLink) => {
//     let transporter = nodemailer.createTransport({
//       service: "yandex",
//       auth: {
//         user: "zoirovasadbek2002@gmail.com",
//         pass: "uwed2019",
//       },
//     });

//     let mailOptions = {
//       from: EMAIL,
//       to: userEmail,
//       subject: "Email Verification",
//       html: `<a href="localhost:8080/confirm/${verificationLink}">Verify your account</a>`,
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(info.response);
//       }
//     });
//   },
// };

const nodemailer = require("nodemailer");

async function main(email, id) {
  let testAccount = await nodemailer.createTestAccount();

  const transport = await nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transport.sendMail({
    from: `"Kimdir" ${testAccount.user}`,
    to: `${email}`,
    subject: "Test uchun yuborildi",
    html: `<a href="localhost:8080/confirm/${id}">Verify your account</a>`,
  });

  console.log(info);
  console.log(nodemailer.getTestMessageUrl(info));
}

module.exports = main;
