import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Date from "@components/Date";

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
        <title>{title} | Pinheiro de Azevedo Advocacia</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div className="container mx-auto px-5 md:px-16 mt-10">
          <article>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
              {title}
            </h2>
            <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
              <div className="-mx-5 sm:mx-0">
                {imageUrl && (
                  <img
                    className="shadow-small max-w-full max-h-full"
                    src={imageUrl}
                  />
                )}
              </div>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 text-lg">
                <Date dateString={date} />
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="leading-relaxed  text-gray-600">
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