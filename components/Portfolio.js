import Embla01 from "@components/EmblaCarousel";
import Image from "next/image";
import part01 from "../public/part-01.png";
import part02 from "../public/part-02.png";
import part03 from "../public/part-03.png";
import part04 from "../public/part-04.png";
import part05 from "../public/part-05.png";
import part06 from "../public/part-06.png";
import corp01 from "../public/corp-01.png";
import corp02 from "../public/corp-02.png";
import corp03 from "../public/corp-03.png";
import corp04 from "../public/corp-04.png";
import cont01 from "../public/cont-01.png";
import cont02 from "../public/cont-02.png";
import cont03 from "../public/cont-03.png";
import cont04 from "../public/cont-04.png";
import cont05 from "../public/cont-05.png";

export default function Profile() {
  const partidos = [part01, part02, part03, part04, part05, part06];
  const corporativo = [corp01, corp02, corp03, corp04];
  const conteudo = [cont01, cont02, cont03, cont04, cont05];

  return (
    <div id="clientes" className="mt-3 flex flex-col items-center justify-center mb-5 md:container mx-auto">
      <div className="p-4">
        <div className="mt-1 w-10 h-0.5 bg-primary mb-2"></div>
        <h1 className="leading-none font-rubik text-3xl lg:text-4xl text-gray-900 uppercase mb-2">
          Clientes e Portfolio
        </h1>
        <div className="lg:grid lg:grid-cols-3 mt-8 gap-7">
          <div className="pl-2 mb-10 mx-auto">
            <h2 className="mb-2 tracking-tight leading-none font-rubik text-xl text-gray-800 uppercase">
              Consultoria em Campanhas Politicas
            </h2>
            <Embla01 />
          </div>
          <div className="pl-2 lg:pl-0 mx-auto w-full mb-10 lg:mb-0">
            <h2 className="mb-2 tracking-tight leading-none font-rubik text-xl text-gray-800 uppercase">
              Partidos e Fundações
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-2">
              {partidos.map((p) => (
                <div>
                  <Image src={p} layout="responsive" />
                </div>
              ))}
            </div>
          </div>

          <div className="pl-2 lg:pl-0 mb-10 w-full mx-auto lg:mb-0">
            <h2 className="mb-2 tracking-tight leading-none font-rubik text-xl text-gray-800 uppercase">
              corporativo e Bureau
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-2">
              {corporativo.map((c) => (
                <div>
                  <Image src={c} layout="responsive" />
                </div>
              ))}
            </div>
          </div>
          <div className="pl-2 lg:col-span-3">
            <h2 className="mb-3 tracking-tight leading-none font-rubik text-xl text-gray-800 uppercase">
              Produção de Conteúdo
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {conteudo.map((c) => (
                <div className="transform transition-all hover:scale-105 cursor-pointer">
                  <Image src={c} layout="responsive" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
