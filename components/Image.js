import { urlFor } from "sanity";

const Image = ({ image, alt }) => {
  return (
    <>
      <img src={urlFor(image)} alt={alt} />
    </>
  );
};

export default Image;
