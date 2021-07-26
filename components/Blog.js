import Image from "next/image";
import postPhoto from "../public/blog-01.jpeg";

export default function Blog() {
  return (
    <div className="md:container mx-auto">
        
      <div className="p-4">
        <div className="mt-2 w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl text-black uppercase">
          Blog
        </h1>
      </div>
      <div className="p-5 w-full">
        <Image src={postPhoto} alt="Imagem da Adriana" />
      </div>
      <div className="flex flex-col mx-8 bg-white shadow-md mb-10">
        <div className="p-4 mt-2">
          <h1 className="font-rubik text-2xl text-black uppercase mb-2 rounded-r-lg">
            Como eu montei uma rede de comunicação nacional em 5 passos?
          </h1>
          <p className="leading-relaxed tracking-tight text-base font-roboto text-gray-800 antialiased mb-5">
            Publicado em 1 de Julho de 2021</p>
          <p className="leading-relaxed tracking-tight text-md font-roboto antialiased">
            Como coordenadora de Comunicação da Executiva Nacional do PSDB,
            entre 2012 e 2018, eu recebi a missão de organizar uma rede de
            comunicação nacional para o partido.
            <p className="mt-2">
              {" "}
              Confesso que quando aceitei o convite, meu objetivo principal era
              trabalhar dentro de uma campanha presidencial. Depois de
              acompanhar 5 eleições presidenciais como repórter, eu queria
              conhecer a engrenagem da campanha por dentro.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
