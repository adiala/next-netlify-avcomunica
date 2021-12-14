import { sanityClient } from "sanity";
import Image from "@components/Image";
import PostBody from "../../components/post-body";
import Logo from "@components/Logo2.js";
import Footer from "@components/Footer";
import Head from "next/head";
import Date from "@components/Date";
import Navbar from "@components/Navbar";
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";
import {
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";

export const Post = ({ title, author, body, image, date, excerpt, slug }) => {
  const imgStyle = {
    maxHeight: "600px",
  };

  return (
    <div>
      <Head>
        <title>{title} | Adriana Vasconcelos Comunicação Estratégica</title>
        <meta name="description" content={excerpt}></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar
        logo={<Logo />}
        urlServicos=".././#servicos"
        urlClientes=".././#clientes"
        urlPerfil=".././#perfil"
      />
      <div className="container mx-auto px-4 lg:px-0">
        <article>
          <div className="flex flex-col mt-4 lg:mt-0 lg:flex-row lg:items-center">
            <div className="w-full max-h-full ">
              <Image
                image={image}
                className="object-cover object-center w-full"
                style={imgStyle}
              />
            </div>
            <div className="flex flex-col lg:pl-24 lg:pr-5 flex-grow-0 lg:w-9/12 mt-4 lg:mb-0 mb-4">
              <h1 className="lg:text-5xl text-3xl font-roboto tracking-tight font-bold mb-4">
                {title}
              </h1>
              <p className="lg:text-lg text-base font-bold text-roboto tracking-tight antialiased text-gray-900">
                {" "}
                por {author}
              </p>
              <p className="text-base text-roboto tracking-tight text-gray-600 mb-4">
                em <Date dateString={date} />
              </p>
              <div className="flex items-center space-x-4 font-light font-roboto text-gray-700">
                <p>Compartilhe:</p>
                <LinkedinShareButton
                  title={title}
                  summary={excerpt}
                  url={`https://adrianavasconcelos.com.br/post/${slug}`}
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton
                  title={title}
                  summary={excerpt}
                  url={`https://adrianavasconcelos.com.br/post/${slug}`}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                  title={title}
                  windowWidth={1000}
                  windowHeight={500}
                  summary={excerpt}
                  url={`https://adrianavasconcelos.com.br/post/${slug}`}
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <FacebookShareButton
                  title={title}
                  summary={excerpt}
                  url={`https://adrianavasconcelos.com.br/post/${slug}`}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </div>
            </div>
          </div>

          <div className="mx-auto"></div>

          <div className="max-w-4xl mx-auto mb-10">
            <PostBody content={body} />
          </div>
        </article>
      </div>
      <Footer
        urlServicos="../#servicos"
        urlClientes="../#clientes"
        urlPerfil="../#perfil"
      />
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "post" && slug.current == $pageSlug][0] {
      body,
      'author': author->name,
      title,
      mainImage,
      publishedAt,
      excerpt,
      'slug': slug.current,
    }`;

  const post = await sanityClient.fetch(query, { pageSlug });

  if (!post) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        date: post.publishedAt,
        excerpt: post.excerpt,
        author: post.author,
        slug: post.slug,
      },
    };
  }
};

export default Post;
