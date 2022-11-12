import { useForm } from "react-hook-form";
import { signIn, getProviders } from "next-auth/react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Form, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PasswordForm from "../../components/PasswordForm";
import axios from "axios";
import { useRouter } from "next/router";

export default function Register() {
  function onSubmit(data) {
    //console.log(data);
    const domain = window.location.host;
    //console.log(domain);
    axios
      .post(`http://${domain}/api/user/signin`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((res) => {
        data = res.data;
        console.log("success");
        console.log(data);
        set_Error("");
      })
      .catch((err) => {
        set_Error(err.response.data.message);
        console.table(err);
      });
  }
  const [error, set_Error] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  console.log(getProviders());
  return (
    <div className="grid h-screen place-items-center mb-3 flex-wrap ">
      <div className="">
        <Form
          className="mb-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Alert variant="white">{error}</Alert>
          <Form.Group controlId="username">
            <Form.Label>Tên Đăng Nhập</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tên đăng nhập"
              {...register("username", {
                required: "Tên đăng nhập không được để trống",
              })}
            ></Form.Control>
            {errors.loginName && (
              <span style={{ color: "red" }}>{errors.loginName.message} </span>
            )}
          </Form.Group>

          <Form.Group controlId={"password"}>
            <Form.Label>{"Mật khẩu"}</Form.Label>
            <Form.Control
              type="password"
              placeholder={"Mật khẩu"}
              {...register("password", {
                required: "Mật khẩu không được để trống",
              })}
            ></Form.Control>

            {errors.password && (
              <div className="w-72">
                <span style={{ color: "red" }} className="w-3">
                  {errors.password.message}
                </span>
              </div>
            )}
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Giữ đăng nhập"
            {...register("rememberMe", { required: true })}
          ></Form.Check>
          {() => {
            return getProviders().map((value, index) => {
              return <> </>;
            });
          }}
          <div id={0} className=" place-items-center mb-3 flex-wrap ">
            <Button
              className="w-full"
              variant="danger"
              color="danger"
              onClick={() => {
                signIn("google");
              }}
            >
              <div className="w-full flex items-center justify-center gap-2 font-bold">
                Tiếp tục với {"google"} <FaGoogle />
              </div>
            </Button>
          </div>
          <Link href="/forgotPassword">Quên mật khẩu</Link>
          <Button
            variant="primary "
            onClick={handleSubmit((formdata) => {
              onSubmit(formdata);
            })}
            className=""
          >
            Đăng Kí
          </Button>

          <p>
            Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
