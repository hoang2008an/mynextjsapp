import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Link from "next/link";
export default function Register() {
  const [data, setdata] = useState();
  function onSubmit(data) {
    console.log(data);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <Form
      onSubmit={handleSubmit((formdata) => {
        onSubmit(formdata);
      })}
    >
      <Form.Group controlId="formLoginName">
        <Form.Label>Tên Đăng Nhập</Form.Label>
        <Form.Control
          type="text"
          placeholder="Tên đăng nhập"
          {...register("loginName", { required: true })}
        ></Form.Control>
        {errors.loginName && (
          <span style={{ color: "red" }}>
            Tên đăng nhập không được để trống
          </span>
        )}
      </Form.Group>
      <Button variant="primary " className="">
        Submit
      </Button>

      <p>
        Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
      </p>
    </Form>
  );
}
