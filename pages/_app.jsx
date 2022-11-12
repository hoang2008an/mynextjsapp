import "../styles/globals.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
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

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isLogin, setisLogin] = useState();

  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </SSRProvider>
  );
}

export default MyApp;
