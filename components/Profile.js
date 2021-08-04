import Image from "next/image";
import profilePic from "../public/adriana-perfil.jpg";

export default function Profile() {
  return (
    <section className="container mx-auto px-4 lg:grid lg:grid-flow-col lg:grid-cols-3 lg:gap-6 mb-10">
      <div className="lg:col-span-2">
        <Image src={profilePic} />
      </div>
      <div className="mt-2">
        <div className="w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl lg:text-4xl text-gray-900 uppercase mb-2">
          Perfil
        </h1>
        <p className="text-gray-800 tracking-tight text-lg font-roboto antialiased">
          Mãe do Bruno e jornalista com ampla experiência nos 2 lados da
          notícia. Atuou 24 anos nas redações do Correio Braziliense, Gazeta
          Mercantil e O Globo.
        </p>
        <p className="mt-3 text-gray-800 tracking-tight text-lg font-roboto antialiased">
          Especializou-se em coberturas políticas, o que a levou a acompanhar o
          dia-a-dia de 5 campanhas presidenciais, de 1994 a 2010. Desde 2012,
          atua como consultora em Comunicação Estratégica.
        </p>
        <p className="mt-3 text-gray-800 tracking-tight text-lg font-roboto antialiased">
          Por 6 anos, coordenou a Comunicação da Executiva Nacional do PSDB,
          integrando a equipe de campanha do partido nas disputas presidenciais
          de 2014 e 2018.
        </p>
        <p className="mt-3 text-gray-800 tracking-tight text-lg font-roboto antialiased">
          Seu foco principal hoje é ajudar lideranças femininas a ocuparem
          espaços de Poder.
        </p>
      </div>
    </section>
  );
}
