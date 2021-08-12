import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Logo from "@components/Logo2.js";
import { useState, useEffect } from "react";
import Footer from "@components/Footer";
import Head from "next/head";
import Date from "@components/Date";
import Navbar from "@components/Navbar";

function Post({ title, body, image, date }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = ImageUrlBuilder({
      projectId: "9xodeons",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <Head>
        <title>{title} | Adriana Vasconcelos Comunicação Estratégica</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar logo={<Logo />} />
      <main>
        <div className="container mx-auto px-4 mt-10">
          <article>
            <div className="mb-2 md:mb-16">
              <div className="">
                {imageUrl && (
                  <img
                    className="object-cover h-3/4 w-full shadow-small"
                    src={imageUrl}
                  />
                )}
              </div>
            </div>
            <h2 className="text-5xl font-roboto tracking-tight font-bold">
              {title}
            </h2>
            <div className="mx-auto">
              <div className="mb-6 text-base text-roboto text-gray-800">
                <p>
                  Postado em: <Date dateString={date} />
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              <div className="leading-loose text-gray-900 text-xl">
                <BlockContent
                  blocks={body}
                  projectId="9xodeons"
                  dataset="production"
                />
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer
        urlServicos="../#servicos"
        urlClientes="../#clientes"
        urlPerfil="../#perfil"
      />
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://9xodeons.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        date: post.publishedAt,
      },
    };
  }
};

export default Post;
