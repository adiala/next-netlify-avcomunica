import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { useState, useEffect } from "react";
import Logo from "@components/Logo2";
import Date from "@components/Date";
import ImageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

export default function BlogPage({ posts }) {
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

  const firstPost = mappedPosts.slice(0, 1);
  const otherPost = mappedPosts.slice(1);
  // Fim da função de Posts

  return (
    <>
      <Head>
        <title>Adriana Vasconcelos Comunicação Estratégica | Blog</title>
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
        <section className="container mx-auto mb-8 lg:mt-10">
          {firstPost.length ? (
            firstPost.map((p, index) => (
              <div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-between">
                <div className="lg:w-full lg:h-full">
                  <img src={p.mainImage} className="w-full h-full" />
                </div>
                <div className="mt-4 px-4 flex mx-auto space-x-4">
                  <div className="min-h-full w-2 bg-primary lg:hidden"></div>
                  <div className="lg:flex-grow-0 lg:w-full">
                    <h1 className="font-rubik text-lg text-gray-700 uppercase leading-tight tracking-tighter lg:text-3xl lg:leading-normal hover:underline cursor-pointer">
                      {p.title}
                    </h1>
                    <p className="font-rubik text-sm text-gray-500 tracking-tighter mb-2">
                      Publicado em: <Date dateString={p.publishedAt} />
                    </p>
                    <p className="font-rubik text-base text-gray-700 tracking-tighter leading-tight lg:text-lg">
                      {p.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>Sem posts no momento</>
          )}
        </section>
        <section className="container mx-auto px-2 mt-2 lg:flex lg:flex-row lg:px-0">
          {otherPost.length ? (
            otherPost.map((p, index) => (
              <div className="flex flex-row space-x-4 mb-4 lg:flex-col lg:w-full lg:flex-wrap lg:mr-4 lg:space-x-0">
                <div className="flex-none w-44 lg:w-full lg:mb-4">
                  <img src={p.mainImage} className="" />
                </div>
                <div className="flex my-auto lg:flex-col lg:m-0">
                  <div>
                    <h1 className="font-rubik text-sm text-gray-700 uppercase leading-tight tracking-tighter mb-2 lg:text-base">
                      {p.title}
                    </h1>
                    <p className="font-rubik text-xs text-gray-500 tracking-tighter lg:text-sm">
                      Publicado em: <Date dateString={p.publishedAt} />
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>Sem posts no momento</>
          )}
        </section>
      </main>

      <Footer
        urlServicos="../#servicos"
        urlClientes="../#clientes"
        urlPerfil="../#perfil"
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    '*[_type == "post"] | order(publishedAt desc)'
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
