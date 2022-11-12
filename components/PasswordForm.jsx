import { useRef } from "react";
import { Form } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
export default function PasswordForm({
  register,
  errors,
  controlId,
  placeholder,
  onChange,
}) {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        type="password"
        placeholder={placeholder}
        {...register(controlId, { required: true })}
        onChange={onChange}
      ></Form.Control>

      {errors.loginName && (
        <span style={{ color: "red" }}>{placeholder} không được để trống</span>
      )}
    </Form.Group>
  );
}
