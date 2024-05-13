const userSchema=require('../schema')
const jwt=require('jsonwebtoken')
const SECRET_KEY=process.env.SECRET_KEY 
// userList
const getUserListData= async(req,res)=>{
    try {
        const getList = await userSchema.find()
        res.send({
            "Success":true,
            "data":getList
        })
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
// userCreate
const createUser = async(req,res)=>{
    try {
        const createUser = new userSchema(req.body)
        await createUser.save()
        res.status(200).send({
            "Success":true,
            data:createUser
        })
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
//userUpdate
const updateuser=async(req,res)=>{
    try {
        const updateUser= await userSchema.findByIdAndUpdate(req.params._id,req.body,{new :true})
        res.send({
            "Success":true,
            data:updateUser
        })
    } catch (error) {
        res.status.send("Internal Server Error")
    }

}
// userDelete
const deleteuser=async(req,res)=>{
    try {
        const deleteUser=await userSchema.findByIdAndDelete(req.params._id)
        res.send({
            "Success":true,
            'data':deleteUser
        })
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
// userListById
const userlistById =async(req,res)=>{
    try {
        const getlistById=await userSchema.findById(req.params._id)
        res.send({
            'data':getlistById
        })
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
// userLogin
const userLogin=async(req,res)=>{
    try {
        const user= await userSchema.find()
        const userFound= user.find((item)=> item.Username == req.body.Username && item.Password == req.body.Password)
        if(userFound){
            const token=jwt.sign({userFound},SECRET_KEY,{expiresIn:'1h'})
            res.send({
                'Success':true,
                'data':userFound,
                'token':token
            })
        }else{
            res.send("User Not Found")
        }
        
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }

}

module.exports={getUserListData,createUser,updateuser,deleteuser,userlistById,userLogin}