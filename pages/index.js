import Head from "next/head";
import Navbar from "@components/Navbar";
import Logo from "@components/Logo";
import Hero from "@components/Hero";
import Profile from "@components/Profile";
import Services from "@components/Services";
import Contact from "@components/Contact";
import Portfolio from "@components/Portfolio";
import Blog from "@components/Blog";
import Footer from "@components/Footer";
import Date from "@components/Date";
import Link from "next/link";
import { sanityClient } from "sanity";
import Image from "@components/Image";

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Adriana Vasconcelos Comunicação Estratégica</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Adriana Vasconcelos Comunicação Estratégica"
        />
        <meta
          name="description"
          content="Jornalista com ampla experiência nos 2 lados da notícia. Atuou 24 anos nas redações do Correio Braziliense, Gazeta Mercantil e O Globo."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adrianavasconcelos.com.br/" />
        <meta
          property="og:title"
          content="Adriana Vasconcelos Comunicação Estratégica"
        />
        <meta
          property="og:description"
          content="Jornalista com ampla experiência nos 2 lados da notícia. Atuou 24 anos nas redações do Correio Braziliense, Gazeta Mercantil e O Globo."
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://adrianavasconcelos.com.br/"
        />
        <meta
          property="twitter:title"
          content="Adriana Vasconcelos Comunicação Estratégica"
        />
        <meta
          property="twitter:description"
          content="Jornalista com ampla experiência nos 2 lados da notícia. Atuou 24 anos nas redações do Correio Braziliense, Gazeta Mercantil e O Globo."
        />
        <meta property="twitter:image" content="" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar
        logo={<Logo />}
        urlServicos="#servicos"
        urlClientes="#clientes"
        urlPerfil="#perfil"
      />
      <main>
        <Hero />
        <Blog />
        <section className="mb-3 md:container md:mx-auto md:grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
          {posts.length ? (
            posts.map((p) => (
              <Link
                href={{
                  pathname: "/post/[slug]",
                  query: { slug: `${p.slug.current}` },
                }}
              >
                <a className="flex flex-col relative border-2 mx-4 mb-3 transform transition-all hover:scale-105 cursor-pointer">
                  <div className="object-cover h-52 overflow-hidden">
                    <Image image={p.mainImage} alt={p.title} />
                  </div>
                  <div className="p-5">
                    <div className="flex relative">
                      <div className="absolute w-2 p-0 m-0 bg-primary rounded-sm min-h-full"></div>
                      <div className="ml-4">
                        <h2 className="font-roboto text-lg tracking-tighter text-gray-900 font-bold uppercase leading-tight">
                          {p.title}
                        </h2>
                      </div>
                    </div>

                    <div>
                      <p className="mt-2 mb-2 tracking-tighter text-sm text-gray-700 font-roboto antialiased">
                        Publicado em <Date dateString={p.publishedAt} />
                      </p>
                      <hr></hr>
                    </div>
                    <p className="mt-2 text-gray-800 tracking-tight text-md font-roboto antialiased">
                      {p.excerpt}
                    </p>
                  </div>
                </a>
              </Link>
            ))
          ) : (
            <>Sem posts no momento</>
          )}
        </section>
        <div className="flex justify-center mb-4 p-4 md:container mx-auto">
          <Link href="/blog">
            <a>
              <button className="bg-primary w-full lg:w-32 h-10 p-2 hover:bg-secondary transition-all text-white text-center text-md tracking-tight font-rubik antialiased uppercase cursor-pointer">
                Leia Mais »
              </button>
            </a>
          </Link>
        </div>
        <Services />
        <Contact />
        <Portfolio />
        <Profile />
        <Footer
          urlServicos="#servicos"
          urlClientes="#clientes"
          urlPerfil="#perfil"
        />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc)[0..3]`;
  const posts = await sanityClient.fetch(query);

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};

export default Home;
