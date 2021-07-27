import Image from "next/image";
import profilePic from "../public/adriana-perfil.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center mb-5 md:container mx-auto">
      <div className="h-full w-full">
        <Image src={profilePic} alt="Imagem da Adriana" />
      </div>
      <div className="self-start p-4">
        <div className="mt-1 w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl text-black uppercase mb-2">
          Perfil
        </h1>

        <p className="leading-relaxed tracking-tight text-md font-roboto antialiased">
          Mãe do Bruno e jornalista com ampla experiência nos 2 lados da
          notícia. Atuou 24 anos nas redações do Correio Braziliense, Gazeta
          Mercantil e O Globo.
        </p>
        <p className="leading-relaxed tracking-tight text-md font-roboto antialiased mt-3">
          Especializou-se em coberturas políticas, o que a levou a acompanhar o
          dia-a-dia de 5 campanhas presidenciais, de 1994 a 2010. Desde 2012,
          atua como consultora em Comunicação Estratégica.
        </p>
        <p className="leading-relaxed tracking-tight text-md font-roboto antialiased mt-3">
          Por 6 anos, coordenou a Comunicação da Executiva Nacional do PSDB,
          integrando a equipe de campanha do partido nas disputas presidenciais
          de 2014 e 2018.
        </p>
        <p className="leading-relaxed tracking-tight text-md font-roboto antialiased mt-3">
          Seu foco principal hoje é ajudar lideranças femininas a ocuparem
          espaços de Poder.
        </p>
      </div>
    </div>
  );
}
