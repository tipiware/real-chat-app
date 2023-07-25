import Head from "next/head";
import GlobalStyle from "../styles/global";
import Main_Body from "../components/Main_Body";

export default function About() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>About us</title>
      </Head>
      <Main_Body />
    </>
  );
}