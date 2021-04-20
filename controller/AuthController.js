// const { Mongoose } = require('mongoose')
const Users  = require('../models/User')


const userContact = {
     contact : async (req,res,next)=>{
        const user = new Users({
           name: req.body.name,
           email:req.body.email,
           phone:req.body.phone,
           message:req.body.message
    
        })
        await user.save()
        .then(user =>{
            res.json({
                message :"user added successfully"
            })
        })
        .catch(error=>{
            res.json({
                message:'an error occured'
            })
        })
    
    },
    
     allAccess : async (req, res) => {
        try {
          const users = await Users.find(req.user)
      
          res.json(users)
      } catch (err) {
          return res.status(500).json({msg: err.message})
      }
      
      }

}


module.exports = userContact



