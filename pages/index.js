import Head from "next/head";
import NavBar from "@components/NavBar";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import Profile from "@components/Profile";
import Services from "@components/Services";
import Blog from "@components/Blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adriana Vasconcelos Comunicação Estratégica | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans+JP&family=Open+Sans&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main>
        <Hero />
        <Blog />
        <Services />
        <Profile />
      </main>
    </>
  );
}
