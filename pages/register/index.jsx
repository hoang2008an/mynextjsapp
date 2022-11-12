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
    <div className="grid h-screen place-items-center mb-3 flex-wrap  ">
      <Form
        className=" shadow-lg shadow-white w-96 m-8 p-4 rounded-lg border-300 border-2"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <section className="border-b-2">
          <header className="font-bold text-2xl p-3">Đăng kí Tài Khoản</header>
        </section>
        {error ? (
          <Alert variant="danger" className="text-center p-1 mt-2">
            {error}
          </Alert>
        ) : (
          ""
        )}
        <Form.Group controlID="name">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ và tên"
            {...register("name", {
              required: "Họ và tên không được để trống",
            })}
          ></Form.Control>
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message} </span>
          )}
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Tên Đăng Nhập</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên đăng nhập"
            {...register("username", {
              required: "Tên đăng nhập không được để trống",
            })}
          ></Form.Control>
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username.message} </span>
          )}
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email không được để trống",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email không hợp lệ",
              },
            })}
          ></Form.Control>
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </Form.Group>
        <Form.Group controlId={"password"}>
          <Form.Label>{"Mật khẩu"}</Form.Label>
          <Form.Control
            type="password"
            placeholder={"Mật khẩu"}
            {...register("password", {
              required: "Mật khẩu không được để trống",
              pattern: {
                //8 kí tự trở lên, ít nhất 1 chữ cái và  1 số và có thể có kí tự đặc biệt
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "Mật khẩu phải có ít nhất 8 kí tự, 1 chữ cái và 1 số",
              },
              minLength: {
                value: 8,
                message: "Mật khẩu phải có ít nhất 8 kí tự, 1 chữ cái và 1 số",
              },
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
        <Form.Group controlId={"rePassword"}>
          <Form.Label>{"Nhập lại mật khẩu"}</Form.Label>
          <Form.Control
            type="password"
            placeholder={"Nhập lại mật khẩu"}
            {...register("rePassword", {
              required: "Mật khẩu không được để trống",
              validate: (value) =>
                value === watch("password") || "Mật khẩu không khớp",
            })}
          ></Form.Control>

          {errors.rePassword && (
            <span style={{ color: "red" }}>{errors.rePassword.message}</span>
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
        <div id={0} className=" place-items-center mb-3 flex-wrap my-4 ">
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
  );
}
