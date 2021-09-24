import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Date from "@components/Date";
import { sanityClient } from "sanity";
import router from "next/router";
import Image from "@components/Image";

export default function BlogPage({ posts }) {
  const firstPost = posts.slice(0, 1);
  const otherPost = posts.slice(1);

  return (
    <>
      <Head>
        <title>Adriana Vasconcelos Comunicação Estratégica | Blog</title>
        <meta
          name="description"
          content="Adriana Vasconcelos Comunicação Estratégica - Para se Comunicar bem, é preciso estratégia"
        ></meta>
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
      <Navbar
        logo={<Logo />}
        urlServicos="./#servicos"
        urlClientes="./#clientes"
        urlPerfil="./#perfil"
      />
      <main>
        <section className="container mx-auto mb-8 lg:mt-10">
          {firstPost.length ? (
            firstPost.map((p, index) => (
              <div className="lg:flex lg:flex-row lg:flex-nowrap lg:justify-between">
                <div className="h-60 overflow-hidden">
                <Image image={p.mainImage} />
                </div>
                <div className="mt-4 px-4 flex mx-auto space-x-4">
                  <div className="min-h-full w-2 bg-primary lg:hidden"></div>
                  <div className="lg:flex-grow-0 lg:w-full">
                    <a
                      onClick={() => router.push(`/post/${p.slug.current}`)}
                      key={index}
                      className="cursor-pointer"
                    >
                      <h1 className="font-rubik text-lg text-gray-900 uppercase leading-tight tracking-tighter lg:text-3xl lg:leading-normal hover:underline cursor-pointer">
                        {p.title}
                      </h1>
                    </a>
                    <p className="font-rubik text-sm text-gray-600 tracking-tighter mb-2">
                      Publicado em: <Date dateString={p.publishedAt} />
                    </p>
                    <p className="font-rubik text-base text-gray-800 tracking-tighter leading-tight lg:text-lg">
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
        <section className="container mx-auto px-2 mt-2 lg:flex lg:flex-row lg:px-0 lg:flex-wrap lg:justify-center">
          {otherPost.length ? (
            otherPost.map((p, index) => (
              <div className="flex flex-row space-x-4 mb-4 lg:flex-col lg:mr-4 lg:space-x-0 lg:w-72">
                <div className="flex-none w-44 lg:w-full lg:mb-4 lg:object-cover lg:h-40 lg:overflow-hidden">
                  <a
                    onClick={() => router.push(`/post/${p.slug.current}`)}
                    key={index}
                    className="cursor-pointer"
                  >
                    <Image image={p.mainImage} />
                  </a>
                </div>
                <div className="flex my-auto lg:flex-col lg:m-0">
                  <div>
                    <a
                      onClick={() => router.push(`/post/${p.slug.current}`)}
                      key={index}
                      className="cursor-pointer"
                    >
                      <h1 className="font-rubik text-sm text-gray-900 uppercase leading-tight tracking-tighter mb-2 lg:text-base hover:underline">
                        {p.title}
                      </h1>
                    </a>
                    <p className="font-rubik text-xs text-gray-600 tracking-tighter lg:text-sm">
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
  const query = `*[_type == "post"] | order(publishedAt desc)`;
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
