import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { Else, If, Then } from "react-if";
import { useSession, signIn, signOut } from "next-auth/react";
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
import { useEffect } from "react";
import Client from "./Client";
export default function Header({ className }) {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className={className}>
      <Navbar expand="lg" className="bg-pink-600  p-2 ">
        <Container>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand href="/" className="flex justify-center">
              <FaHome className="relative top-1"></FaHome>{" "}
              <span className="text-black ">Home</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <NavDropdown title="Toán">
                <NavDropdown.Item>
                  <Link href="/giaipt" passHref>
                    Giải phương trình
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="m-2">
                <Link href="/giai_pt" passHref className="p-5">
                  Giải phương trình
                </Link>
              </Nav.Item>
            </Nav>
            <Nav className=" ">
              <>
                {status === "authenticated" ? (
                  <>
                    <Image
                      src={session.user.image}
                      width={40}
                      height={40}
                      className="rounded-full inline-block "
                    ></Image>

                    <NavDropdown title={session.user.name}>
                      <NavDropdown.Item
                        onClick={() => {
                          signOut();
                        }}
                      >
                        <p>Đăng xuất </p>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <Nav.Item className="">
                      <Link className="p-8" href="login" passHref>
                        Đăng Nhập
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link href="/register" className="" passHref>
                        Đăng Kí
                      </Link>
                    </Nav.Item>
                  </>
                )}
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
