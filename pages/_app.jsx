import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {useState} from "react";



function MyApp({ Component, pageProps }) {

const [isLogin,setisLogin]=useState();


    return (
      <div className="">
      <Navbar expand="lg" className="bg-pink-600 font-bold text-white mr-auto-auto h">
          <Container>

            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Nav className="mr-auto">
                <Nav.Link href="/giai_pt">Giải phương trình</Nav.Link>

                   <Nav.Link href="/register" className={"position-absolute right-28 border-r "} >Đăng kí</Nav.Link>
                  <Nav.Link href="/login" className={"position-absolute right-2"}> Đăng nhập</Nav.Link>



              </Nav>
          </Container>

      </Navbar>

      <Component {...pageProps} />
      </div>
        )
}

export default MyApp
