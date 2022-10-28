import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
let doBalance = () => {
  console.log("doBalance1");
};

export default function canbanghoahoc() {
  useEffect(() => {
    doBalance =
      require("../../../utils/algorithim/chemistry_equation_balancer").doBalance;
  }, []);
  return (
    <div>
      <Head>
        <title>Canbanghoahoc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Canbanghoahoc</h1>
      <form>
        <input
          type="text"
          id="inputFormula"
          onSubmit={(e) => {
            e.preventDefault;
          }}
        />
        <button
          type="button"
          onClick={function () {
            doBalance();
          }}
        >
          Balance
        </button>
        <span id="balanced"></span>
        <span id="codeOutput"></span>
        <span id="message"></span>
      </form>
    </div>
  );
}
