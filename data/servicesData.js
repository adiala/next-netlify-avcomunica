import { RiGovernmentFill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";
import { HiPuzzle } from "react-icons/hi";
import { FaLaptop } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsChatQuoteFill } from "react-icons/bs";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { MdEventNote } from "react-icons/md";

const styles = {
  sIcon: "h-full w-full text-white",
  title: "font-rubik tracking-tighter text-xl text-black uppercase rounded-r-lg text-gray-900",
  p1: "pr-2 mt-2 tracking-wide text-md font-roboto antialiased text-gray-700",
  p2: "pr-2 mt-2 tracking-wide text-md font-roboto antialiased text-gray-700",
};

const servicesData = [
  {
    icon: <RiGovernmentFill className={styles.sIcon} />,
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
    icon: <HiSpeakerphone className={styles.sIcon} />,
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
    icon: <HiPuzzle className={styles.sIcon} />,
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
    icon: <FaLaptop className={styles.sIcon} />,
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
  {
    icon: <FaLightbulb className={styles.sIcon} />,
    name: <h1 className={styles.title}>PRODUÇÃO DE CONTEÚDO</h1>,
    description: (
      <p className={styles.p1}>
        Está precisando de conteúdo para seu site pessoal ou de sua empresa,
        quer organizar ideias para um livro, cartilha ou manual? Nós cuidamos
        disso para nossos clientes e também podemos editar o material que você
        já tem em mãos.
      </p>
    ),
  },
  {
    icon: <BsFillPeopleFill className={styles.sIcon} />,
    name: <h1 className={styles.title}>COMUNICAÇÃO INSTITUCIONAL</h1>,
    description: (
      <p className={styles.p1}>
        Identificamos o melhor canal para você se comunicar com seu público
        alvo. Pode ser uma revista, um jornal, boletim, newsletter, artigo ou
        nota oficial. Garantimos que sua mensagem chegue a quem interessa de
        forma eficiente.
      </p>
    ),
  },
  {
    icon: <BsChatQuoteFill className={styles.sIcon} />,
    name: <h1 className={styles.title}>MEDIA TRAINING</h1>,
    description: (
      <p className={styles.p1}>
        Falar em público, sobretudo em tempos de redes sociais e celulares à
        postos, requer cuidados e preparo. Eventuais tropeços não costumam ser
        perdoados! O menos, pode ser mais. Objetividade e clareza exigem
        treinamento. Assim, oferecemos ‘media training’ para clientes que
        precisam falar em público ou enfrentar a imprensa.
      </p>
    ),
  },
  {
    icon: <BsExclamationTriangleFill className={styles.sIcon} />,
    name: <h1 className={styles.title}>GESTÃO DE CRISES</h1>,
    description: (
      <p className={styles.p1}>
        Crises de imagem exigem agilidade para se ter chance de reverter ou
        minimizar danos. Se sua crise chegou às manchetes de jornais e TV, a
        urgência é ainda maior. Estamos preparados para lhe auxiliar tanto com
        monitoramentos, como na definição de uma estratégia para conter o
        estrago.
      </p>
    ),
  },
  {
    icon: <GoGraph className={styles.sIcon} />,
    name: <h1 className={styles.title}>ESTRATÉGIA ELEITORAL</h1>,
    description: (
      <p className={styles.p1}>
        O amadorismo pode ser fatal em campanhas eleitorais. Por meio de
        consultoria, ajudamos nossos clientes a montarem sua estratégia de ação
        do ponto de vista da comunicação ou podemos lhe ajudar a identificar
        problemas e corrigir erros em estratégias já em curso.
      </p>
    ),
  },
  {
    icon: <MdEventNote className={styles.sIcon} />,
    name: <h1 className={styles.title}>Palestras / aulas</h1>,
    description: (
      <p className={styles.p1}>
        Formada pela Universidade de Brasília (UnB), a consultora Adriana
        Vasconcelos faz palestras presenciais ou online sobre Comunicação
        Estratégica, media debates e organiza aulas para estudantes e
        profissionais da área sobre Comunicação Política.
      </p>
    ),
  },
];

export default servicesData;
