import Head from "next/head";
import { useState, useEffect } from "react";
import Date from "@components/Date";
import ImageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

function BlogPost({ posts }) {
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
    <div className="min-h-screen">
      <Head>
        <title>Todos os Posts | Pinheiro de Azevedo Advocacia</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <div className="container mx-auto px-5 md:px-16">
          <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-10 md:mb-12">
            <h1 className="text-primary text-4xl md:text-6xl font-bold leading-tight md:pr-8 break-words">
              Mídia
            </h1>
            <h4 className="text-gray-700 text-center md:text-left text-lg mt-5 md:pl-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </h4>
          </section>

          {/* Início da área de posts */}

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
              {mappedPosts.length ? (
                mappedPosts.map((p, index) => (
                  <div>
                    <div className="mb-5">
                      <div className="-mx-5 sm:mx-0 mb-5 cursor-pointer">
                        <a
                          aria-label={p.title}
                          onClick={() => router.push(`/post/${p.slug.current}`)}
                          key={index}
                        >
                          <img
                            src={p.mainImage}
                            className="shadow-small hover:shadow-medium transition-shadow duration-200 w-full"
                          />
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-3 leading-snug text-xl font-bold text-black">
                      <a
                        onClick={() => router.push(`/post/${p.slug.current}`)}
                        key={index}
                        className="hover:underline cursor-pointer"
                      >
                        {p.title}
                      </a>
                    </h3>
                    <div className="leading-relaxed text-gray-600 mb-3">
                      <Date dateString={p.publishedAt} />
                    </div>
                    <p className="leading-relaxed text-gray-600">{p.excerpt}</p>
                  </div>
                ))
              ) : (
                <>Sem posts no momento</>
              )}
            </div>
          </section>
        </div>
      </main>
      {/* Fim da área de posts */}

    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent(
    '*[_type == "post"] | order(date desc, _updatedAt desc)'
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

export default BlogPost;
