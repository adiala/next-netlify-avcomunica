import Image from "next/image";
import postPhoto from "../public/blog-01.jpeg";

export default function Blog() {
  return (
    <div className="md:container mx-auto">
      <div className="p-4">
        <div className="mt-2 w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl text-gray-900 uppercase">
          Blog
        </h1>
      </div>
    </div>
  );
}
