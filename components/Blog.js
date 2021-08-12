import Image from "next/image";
import Logo from "@components/Logo2";
export default function Blog() {
  return (
    <div className="md:container mx-auto">
      <div className="p-4">
        <div className="mt-2 w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl text-gray-900 uppercase md:text-4xl">
          Blog
        </h1>
      </div>
      <div className="px-4 mt-2 mb-4">
        <Logo />
      </div>
    </div>
  );
}
