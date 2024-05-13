const express=require('express')
const router=express.Router()
const {getUserListData,createUser,updateuser,deleteuser,userlistById,userLogin}=require('../controller')
const authontication=require('../Auth')

router.get('/userList',authontication,getUserListData)
router.post('/createUser',authontication,createUser)
router.post('/updateUser/id=:_id',authontication,updateuser)
router.delete('/deleteUser/id=:_id',authontication,deleteuser)
router.get('/getListById/id=:_id',authontication,userlistById)

router.post('/loginUser',userLogin)

module.exports=router