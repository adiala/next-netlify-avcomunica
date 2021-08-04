import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/avcomunica-logo-horizontal.png";
import { BiMenuAltRight } from "react-icons/bi";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const menuItens = [
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Serviços",
      link: "/",
    },
    {
      name: "Clientes e Portfolio",
      link: "/",
    },
    {
      name: "Perfil",
      link: "/",
    },
  ];

  return (
    <div className="border-t-4 border-primary shadow-md">
      <nav className="flex flex-wrap lg:flex-nowrap items-center p-2 z-30 container mx-auto border-b">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <Image
              src={Logo}
              alt="Logo AV Comunicação Estratégica"
              width={235}
              height={35}
            />
          </a>
        </Link>

        <button
          className="inline-flex p-3 lg:hidden ml-auto outline-none"
          onClick={handleClick}
        >
          <BiMenuAltRight className="h-8 w-8 text-primary" />
        </button>

        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }    w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:ml-auto lg:justify-between items-start flex flex-col lg:flex-row">
            {menuItens.map((i) => (
              <a className="lg:w-auto w-full px-2 py-2 items-right justify-center uppercase tracking-tighter text-rubik antialiased text-gray-700 lg:hover:text-primary lg:cursor-pointer">
                {i.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
