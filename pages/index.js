import Head from "next/head";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import Image from "next/image";
import Net from "/public/netliheart.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Open+Sans&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />

      {/* <main>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Image src={Net} alt="netliheart" />
      </main>

      <Footer /> */}
    </>
  );
}
