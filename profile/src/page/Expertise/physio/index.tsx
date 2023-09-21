import fisio_1 from "../../../assets/svg/Fisio_1.svg";
import fisio_2 from "../../../assets/svg/Fisio_2.svg";
import fisio_3 from "../../../assets/svg/fisio_3.svg";
import title from "../../../assets/svg/titlePhysio.svg";
import { Text } from "../../../Components/Text";
import * as S from "./style";

export function Physio() {
  return (
    <>
      <S.Figure id="titulo">
        <img src={title} alt="titulo da pagina escrito fisioterapia" />
      </S.Figure>
      <S.container>
        <figure>
          <img src={fisio_2} alt=" Fisioterapeuta tratando seu paciente " />
        </figure>
        <Text
          title="Traumato-Ortopédica"
          subtitle="Tratamento de lesões  e traumas ortopédicos"
          main="Ela abrange uma ampla gama de problemas, desde lesões esportivas e acidentes automobilísticos até problemas crônicos de dor nas articulações e músculos. O principal objetivo é melhorar a função, a mobilidade e a qualidade de vida dos pacientes, além de promover a recuperação após cirurgias ortopédicas."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={fisio_1}
            alt="mulher de blusa rosa de exercitando sobre uma bola de pilates"
          />
        </figure>
        <Text
          title="PILATES"
          subtitle="Reduza o estresse e melhore sua postura."
          main="Pilates abrange uma variedade de exercícios que podem ser realizados no chão (Mat Pilates) ou usando equipamentos específicos, como a máquina Reformer. Os exercícios do Pilates são frequentemente realizados com movimentos controlados, respiração consciente e ênfase na qualidade do movimento em vez da quantidade de repetições."
        />
      </S.container>
      <S.container>
        <figure>
          <img src={fisio_3} alt="dois medicos discutindo sobre o paciente " />
        </figure>
        <Text
          title="QUIROPRAXIA"
          subtitle="Crocante..."
          main="A quiropraxia nada mais é do que o uso de técnicas para a manipulação articular da região da coluna vertebral, na qual são realizados trabalhos de correção e realinhamento do eixo principal do corpo humano, com o objetivo de reduzir o risco de lesões e diminuir dores. O tratamento quiroprático oferece uma solução completa para problemas ligados às articulações, dor na coluna, músculos, tendões, nervos e outras estruturas fundamentais do nosso corpo. Promove relaxamento e bem-estar ligados à contratura de origem de estresse ou ansiedade."
        />
      </S.container>
      <S.container>
        <article className="finaltext">
          <h2>Também oferecemos acupuntura, yoga, massagem etc</h2>
          <a href="./../../Professionals">Conheça nossa equipe</a>
        </article>
      </S.container>
    </>
  );
}
