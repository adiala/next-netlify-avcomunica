import Image from "next/image";
import Link from "next/link";
import Logo from "../public/avcomunica-logo-horizontal.png";
import { BiMenuAltRight } from "react-icons/bi";

export default function NavBar() {
  const menuItens = [
    {
      name: "Serviços",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/",
    },
    {
      name: "Contato",
      link: "/",
    },
  ];

  return (
    <nav className="z-30 border-t-4 border-primary">
      <div className="flex w-full h-20 justify-between bg-background items-center p-4 shadow-md">
        <div className="h-9 md:ml-20">
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
        <div>
          <BiMenuAltRight className="h-8 w-8 text-primary md:hidden" />
        </div>
      </div>
    </nav>
  );
}
