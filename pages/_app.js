import "tailwindcss/tailwind.css";
import "../styles/embla.css";
import Script from "next/script";

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-M44WTTJHVC`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M44WTTJHVC');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
};

export default Application;
