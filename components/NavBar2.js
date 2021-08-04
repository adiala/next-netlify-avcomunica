import Image from "next/image";
import Link from "next/link";
import Logo from "../public/avcomunica-logo-horizontal.png";
import { BiMenuAltRight } from "react-icons/bi";

export default function NavBar() {
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
      <nav className="z-30 container mx-auto">
        <div className="flex w-full h-20 justify-between bg-white p-6">
          <div className="h-9 flex-grow">
            <Link href="/">
              <a>
                <Image
                  src={Logo}
                  alt="Logo AV Comunicação Estratégica"
                  width={235}
                  height={35}
                />
              </a>
            </Link>
          </div>
          <div className="lg:flex lg:justify-between">
            {menuItens.map((i) => (
              <div className="lg:p-2 lg:uppercase lg:tracking-tighter lg:text-rubik lg:antialiased lg:text-gray-700 lg:hover:text-primary cursor-pointer">
                {i.name}
              </div>
            ))}
          </div>
          <div>
            <BiMenuAltRight className="h-8 w-8 text-primary lg:hidden" />
          </div>
        </div>
      </nav>
    </div>
  );
}
