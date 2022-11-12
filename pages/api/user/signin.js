import mongoose from "mongoose";
import Users from "../../../models/Users";
import dbConnect from "../../../utils/dbConnect";
import { hash, compare } from "bcrypt";
//const users=require("../../models/user");

export default async function handler(req, res) {
  return new Promise((resolve, reject) => {
    try {
      if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
      }
      const RESULT = dbConnect()
        .then(() => {
          let create_user = false;
          if (
            !(
              req.body.email &&
              req.body.password &&
              req.body.username &&
              req.body.name
            )
          ) {
            res.status(400).json({ message: "All fields are required" });
            return;
          }
          return Users.exists(
            { username: req.body.username },
            function (err, result) {
              if (err) {
                console.log(err);
                res.status(404).send({ message: "Lỗi" });
                return;
              } else if (result) {
                res.status(400).json({ message: "Tên đăng nhập đã tồn tại" });

                return;
              } else {
                if (req.body.email !== undefined) {
                  Users.exists(
                    { email: req.body.email },
                    function (err, result) {
                      if (err) {
                        console.log(err);
                        res.status(404).send({ message: "Lỗi" });
                        return;
                      } else if (result) {
                        res.status(400).json({
                          status: "error",
                          message: "Email đã tồn tại",
                        });
                        return;
                      } else {
                        console.log(1);
                        if (req.body.password !== req.body.rePassword) {
                          res
                            .status(401)
                            .json({ message: "Mật khẩu không khớp" });
                        }
                        hash(
                          req.body.password,
                          process.env.SALT,
                          function (err, hash) {
                            if (err) {
                              console.log(err);
                              res
                                .status(404)
                                .send({ status: "error", message: "Lỗi" });
                              return;
                            } else {
                              let user;
                              try {
                                user = new Users({
                                  username: req.body.username,
                                  password: hash,
                                  name: req.body.name,
                                  email: req.body.email,
                                  // name: req.body.name,
                                  // avatar: req.body.avatar,
                                  // phone: req.body.phone,
                                  // address: req.body.address,
                                  // role: req.body.role,
                                });
                              } catch (err) {
                                console.log(err);
                                res.status(404).send({ message: "Lỗi" });
                                return;
                              }
                              user.save().then((result) => {
                                console.log(result);
                                res.status(200).send({
                                  status: "success",
                                  message: "Tạo tài khoản thành công",
                                  user: result,
                                });
                                return;
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                } else create_user = true;
              }
            }
          );
        })
        .catch(() => {
          res.status(404).json({ message: "Lỗi mạng" });
        });
    } catch (err) {
      res.status(404).json({ message: "Lỗi", err: err });
    }
  });
}
