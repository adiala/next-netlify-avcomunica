import { BsFillMicFill } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";

const styles = {
  sIcon: "h-full w-full text-white",
  title: "font-rubik text-xl text-black uppercase rounded-r-lg",
  p1: "mt-2 leading-relaxed tracking-tight text-md font-roboto antialiased",
  p2: "mt-2 leading-relaxed tracking-tight text-md font-roboto antialiased",
};

const servicesData = [
  {
    icon: <BsFillMicFill className={styles.sIcon} />,
    name: <h1 className={styles.title}>Consultoria Política</h1>,
    description: (
      <div>
        <p className={styles.p1}>
          Transitar no mundo político não é uma tarefa simples. Antes de mais
          nada é preciso saber como as instituições funcionam.
        </p>
        <p className={styles.p2}>
          Podemos encurtar esses caminhos para nossos clientes e definir
          estratégias de atuação dentro do Congresso Nacional e na Esplanada dos
          Ministérios.
        </p>
      </div>
    ),
  },
  {
    icon: <HiOutlineSpeakerphone className={styles.sIcon} />,
    name: <h1 className={styles.title}>Assessoria de Imprensa</h1>,
    description: (
      <p className={styles.p1}>
        A partir da necessidade de nossos clientes, estabelecemos um
        planejamento para estabelecer um canal de comunicação eficiente, seja
        orientando sua própria equipe de assessores ou montando e treinando uma
        para atendê-lo.
      </p>
    ),
  },
  {
    icon: <HiOutlineSpeakerphone className={styles.sIcon} />,
    name: <h1 className={styles.title}>Diagnósticos e Soluções</h1>,
    description: (
      <p className={styles.p1}>
        A partir de diagnósticos minuciosos identificamos problemas de
        comunicação e propomos soluções que atendam os objetivos de nossos
        clientes.
      </p>
    ),
  },
  {
    icon: <HiOutlineSpeakerphone className={styles.sIcon} />,
    name: (
      <h1 className={styles.title}>
        CURADORIA DE EVENTOS VIRTUAIS E PRESENCIAIS
      </h1>
    ),
    description: (
      <p className={styles.p1}>
        Organizamos ‘lives’, seminários, congressos, convenções e cursos
        presenciais ou virtuais.
      </p>
    ),
  },
];

export default servicesData;
