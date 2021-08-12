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
import { useState, useEffect } from "react";
import Date from "@components/Date";
import ImageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ posts }) {
  // Inicio da função de Posts

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts && posts.length) {
      const builder = ImageUrlBuilder({
        projectId: "9xodeons",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: builder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);
  // Fim da função de Posts

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
      <Navbar logo={<Logo />} />
      <main>
        <Hero />
        <Blog />
        <section className="mb-3 md:container md:mx-auto md:grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
          {mappedPosts.length ? (
            mappedPosts.map((p, index) => (
              <div className="flex flex-col relative border-2 mx-4 mb-3 transform transition-all hover:scale-105 cursor-pointer">
                <div>
                  <a
                    aria-label={p.title}
                    onClick={() => router.push(`/post/${p.slug.current}`)}
                    key={index}
                  >
                    <img src={p.mainImage} />
                  </a>
                </div>
                <div className="p-5">
                  <div className="flex relative">
                    <div className="absolute w-2 p-0 m-0 bg-primary rounded-sm min-h-full"></div>
                    <div className="ml-4">
                      <h2 className="font-roboto text-xl tracking-tighter text-gray-900 font-bold">
                        <a
                          onClick={() => router.push(`/post/${p.slug.current}`)}
                          key={index}
                          className="cursor-pointer"
                        >
                          {p.title}
                        </a>
                      </h2>
                    </div>
                  </div>

                  <div>
                    <p className="mt-2 mb-2 tracking-tighter text-sm text-gray-700 font-roboto antialiased">
                      Publicado em <Date dateString={p.publishedAt} />
                    </p>
                    <hr className=""></hr>
                  </div>
                  <p className="mt-2 text-gray-800 tracking-tight text-md font-roboto antialiased">
                    {p.excerpt}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <>Sem posts no momento</>
          )}
        </section>
        <div className="flex justify-center mb-4 p-4 md:container mx-auto">
          <div className="bg-primary w-32 h-10 hover:bg-secondary transition-all">
            <Link href="/blog">
              <p className="p-2 text-white text-center text-md tracking-tight font-rubik antialiased uppercase cursor-pointer">
                Leia Mais »
              </p>
            </Link>
          </div>
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
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "post"][0..3] | order(publishedAt desc)'
  );
  const url = `https://9xodeons.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
