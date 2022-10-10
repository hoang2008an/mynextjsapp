import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Link from "next/link";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  SSRProvider,
} from "react-bootstrap";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isLogin, setisLogin] = useState();

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
