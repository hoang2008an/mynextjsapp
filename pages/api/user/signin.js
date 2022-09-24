import mongoose from "mongoose";
import Users from "../../../models/Users";
import dbConnect from "../../../utils/dbConnect";
//const users=require("../../models/user");

export default function handler(req,res){
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    dbConnect().then(()=>{
        console.log("request has been made");
        let create_user = false;
        Users.exists({"username":req.body.username},function(err,result){
            console.log("0")
            if(err){console.log(err)
                res.status(404).send({message:"Lỗi"})
            }
            else if(result){
                res.status(400).send({message:"Tên đăng nhập đã tồn tại"});

            }
            else {
                console.log("1")
                if(req.body.email!==undefined){
                    Users.exists({"email":req.body.email},function (err,result){
                        if(err) {
                            console.log(err)
                            res.status(404).send({message:"Lỗi"})
                        }
                        else if(result) res.status(400).send({message:"Email đã tồn tại"})
                        else{
                            console.log("3")
                            console.log("2");
                            let user=new Users(req.body);
                            user.save().then(()=>{console.log(user)})
                            res.status(200).json({message:"Thành công"});
                        }
                    })
                }else create_user=true;
            }
        });

    });

}