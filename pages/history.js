import Head from "next/head";
import GlobalStyle from "../styles/global";
import Minor_Body from "../components/Minor_Body";

export default function history() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>About us</title>
      </Head>
      <Minor_Body />
    </>
  );
}