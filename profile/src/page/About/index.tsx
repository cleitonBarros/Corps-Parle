import doctor from "../../assets/svg/doctor.svg";
import golas from "../../assets/svg/golas.svg";
import meditacao from "../../assets/svg/umeditation.svg";
import { Text } from "../../Components/Text/";
import * as S from "./style";

export function About() {
  return (
    <>
      <S.container>
        <figure>
          <img
            src={doctor}
            alt="medico segurando um estescopio e tratando a paciente "
          />
        </figure>
        <Text
          title="sobre nos"
          subtitle="Entenda quem somos e por que existimos"
          main="Corps Parle é uma empresa inovadora que tem como principal objetivo proporcionar a restauração completa da saúde física e mental de seus clientes. Fundada com a visão de oferecer um tratamento holístico e personalizado, a empresa busca atender às necessidades únicas de cada indivíduo, com uma abordagem focada na recuperação integral do corpo e da mente."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={golas}
            alt="homem vestindo um terno preto, olhando para um alvo "
          />
        </figure>
        <Text
          title="VISÃO"
          subtitle="Entenda nossas metas"
          main="A missão da Corps Parle é ser líder no setor de bem-estar e saúde, buscando constantemente oferecer soluções inovadoras e de qualidade para ajudar as pessoas a alcançarem uma vida mais saudável, equilibrada e plena."
        />
      </S.container>
      <S.container>
        <figure>
          <img src={meditacao} alt="uma mulher de blusa rosa meditando " />
        </figure>
        <Text
          title="FILOSOFIA"
          subtitle="Entenda em que acreditamos"
          main="Corps Parle acredita que o bem-estar verdadeiro é alcançado quando corpo e mente estão em harmonia. Com uma abordagem centrada no cliente, a empresa se dedica a compreender profundamente as necessidades individuais, respeitando suas particularidades e proporcionando soluções personalizadas para cada cliente."
        />
      </S.container>
    </>
  );
}
