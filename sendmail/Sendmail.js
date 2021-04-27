const nodemailer = require('nodemailer')
const Contact = require('../models/User')

exports.findContact = async(req,res)=>{
  const{date} = req.body;
  const {email} = req.body;

  try {
    if (date && email) {
      const result = await Contact.find({ email, date });
      if (result) return res.status(200).json(result);
    } else if (date && !email) {
      const result = await Contact.find({ date });
      if (result) return res.status(200).json(result);
    } else if (!date && email) {
      const result = await Contact.find({ email });
      if (result) return res.status(200).json(result);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdelwahadben00@gmail.com',
    pass: 'abdolwahd123'
  }
});

exports.replyContact = async(req,res) =>{
  const {id} = req.params;
  const {message}=req.body;
  try {
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) {
      const mailOptions = {
        from:'abdelwahadben00@gmail.com',
        to: currentContact.email,
        subject:  'test mail',
        text: `${message}`
      };
      const envoiMail = await transporter.sendMail(mailOptions);
      if (envoiMail) res.status(200).json('Mail sent');
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.singleContact = async (req, res) => {
  const { id } = req.params;
  try {
    const currentContact = await Contact.findOne({ _id: id });
    if (currentContact) return res.status(200).json(currentContact);
  } catch (error) {
    return res.status(500).json(error);
  }
};



















// const findContact  = async (req,res)=>{

//     const {date}= req.body;
//     const {email} = req.body;
//     try {


      
//     } catch (error) {
//       return res.status(500).json(error);
//     }
    

      //  const transporter = nodemailer.createTransport({
      //       service: 'gmail',
      //       auth: {
      //         user: 'abdelwahadben00@gmail.com',
      //         pass: 'abdo12345'
      //       }
      //     });

//           var mailOptions = {
//             from: 'abdelwahadben00@gmail.com',
//             to: `${email}`,
//             subject: `${subject}`,
//             text: `${text}`
//           };

//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
//             res.send('email sent')
    
// };


// module.exports = findContact