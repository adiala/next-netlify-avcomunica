import Image from "next/image";
import logo from "public/avcomunica-logo-horizontal.png";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-gray-200 border-b-4 border-primary">
      <footer className="container mx-auto flex flex-col lg:flex-row lg:space-x-4 space-y-4">
        <div className="mt-10 lg:mt-0 w-4/6 lg:w-3/12 lg:p-8 mx-auto lg:mx-0 flex flex-col space-y-4 lg:space-y-8">
          <Image src={logo} />
          <div className="w-full mx-auto h-0.5 bg-gray-300 mt-4"></div>
         
          <div className="mx-auto flex flex-row space-x-4 lg:space-x-8 mb-10">
            <button className="text-gray-600 h-8 w-8 hover:text-primary">
              <SiLinkedin className="h-full w-full" />
            </button>
            <button className="text-gray-600 h-8 w-8 hover:text-primary">
              <SiFacebook className="h-full w-full" />
            </button>
            <button className="text-gray-600 h-9 w-9 hover:text-primary">
              <RiInstagramFill className="h-full w-full" />
            </button>
            <button className="text-gray-600 h-9 w-9 hover:text-primary">
              <AiFillTwitterSquare className="h-full w-full" />
            </button>
          </div>
        </div>

        <div className="mx-auto lg:mx-0 lg:p-5 flex flex-col space-y-1 lg:space-y-5 font-rubik text-base lg:text-base text-gray-800 uppercase">
          <a className="mx-auto lg:mx-0 hover:text-primary cursor-pointer">Blog</a>
          <a className="mx-auto lg:mx-0 hover:text-primary cursor-pointer">Serviços</a>
          <a className="mx-auto lg:mx-0 hover:text-primary cursor-pointer">Clientes e Portfolio</a>
          <a className="mx-auto lg:mx-0 hover:text-primary cursor-pointer">Perfil</a>
        </div>
      </footer>
      <p className="mx-auto my-4 px-4 text-center font-rubik text-sm lg:text-sm text-gray-800 uppercase">
        Copyright © {new Date().getFullYear()} Adriana Vasconcelos Comunicação
        Estratégica
      </p>
    </div>
  );
}
