import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-pink-600   ">
      <Container>
        <Navbar.Brand href="/" className="flex justify-center">
          <FaHome className="relative top-1"></FaHome>
          <Link href="/" passHref>
            <a className="pr-4 mr-4 relative left-2 ">Mathvn</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Toán">
              <NavDropdown.Item>
                <Link href="/giaipt" passHref>
                  <a>Giải phương trình</a>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="m-2">
              <Link href="/giai_pt" className="" passHref>
                <a className="p-5">Giải phương trình</a>
              </Link>
            </Nav.Item>
          </Nav>
          <Nav className="  ">
            <Nav.Item className="">
              <Link className="p-8" href="login" passHref>
                <a className="p-5">Đăng Nhập</a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/register" className="" passHref>
                <a className="p-5">Đăng Kí</a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
