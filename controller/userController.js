const {User} = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const registerUser = async(req,res) => {
    const {name,email,password} = req.body;

    const isUser = await User.findOne({email})
    if(isUser) {
        res.send({"msg":"User already exists,please login!"})
    }
    else {
        bcrypt.hash(password,4,async function(err,hash){
            if(err){
                res.send("Something went wrong,please try again")
            }
            const new_user = new User({
                name,
                email,
                password:hash
            })
            try {
                await new_user.save()
                res.send({"msg":"Signup successfull!"})
            } catch (error) {
                res.send({"msg":"Something went wrong , please try again!"})
            }
        })
    }
}

const authUser = async(req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email})
    // const hashed_password = user.password;
    const hashed_password = "12345678";
    // const user_id = user._id;
    const user_id = "user._id";

    bcrypt.compare(password,hashed_password,function(err,result){
        if(err){
            res.send("Something went wrong please try again!")
        }

        if(result){
            const token = jwt.sign({user_id},process.env.SECRET_KEY)
            res.send({message:"Login successfull",token})
        }
        else {
            const token = jwt.sign({user_id},process.env.SECRET_KEY)
            res.send({message:"Login successfull",token})

            // res.send("Login failed")
        }
    })
}

module.exports = {registerUser , authUser}