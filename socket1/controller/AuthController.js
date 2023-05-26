const db = require("../models")

const helper = require("../config/hepler")



const Users = db.users

module.exports = {

    user: async (req, res) => {
        let io = req.app.get('io');
      
        try {
    let userprofile = await Users.create(req.body)


    io.emit("nikkk",req.body)
 
    return helper.success(res,"kkkk",userprofile)
        } catch (error) {
            return helper.error(res, error)
        }
    },

   
}