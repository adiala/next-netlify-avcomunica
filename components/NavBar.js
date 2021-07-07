import Image from "next/image";
import Link from "next/link";
import Logo from "../public/av-comunica-logo.png";

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
    <nav className="flex flex-col md:flex-row md:px-5 items-center flex-wrap bg-white shadow py-5">
      <Link href="/">
        <a className="self-center mb-3 md:mb-0">
          <Image className="" src={Logo} width={180} height={112} />
        </a>
      </Link>
      <div className=" flex flex-row">
        {menuItens.map((item) => (
          <a className="mr-5 text-primary font-roboto text-base" href={item.link}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
