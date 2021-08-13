import Image from "next/image";
import Logo from "@components/Logo2";
import logo from "public/av.png";
export default function Blog() {
  return (
    <div className="container mx-auto">
      <div className="p-4 relative">
        <div className="absolute">
          <Image src={logo} width={80} height={58} />
        </div>
        <h1 className="leading-none tracking-tighter font-rubik text-3xl text-gray-900 uppercase ml-24">
          Blog
        </h1>
        <h2 className="leading-none tracking-tighter font-rubik lg:text-2xl text-xl text-gray-700 uppercase mt-1 ml-24">
          Os 2 lados da notícia
        </h2>
      </div>
      <hr className="mb-6"/>
    </div>
  );
}
