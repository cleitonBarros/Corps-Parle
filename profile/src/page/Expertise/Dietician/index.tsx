import nutri_1 from "../../../assets/svg/nutricao_1.svg";
import nutri_2 from "../../../assets/svg/nutricao_2.svg";
import nutri_3 from "../../../assets/svg/nutricao_3.svg";
import title from "../../../assets/svg/titleNutri.svg";
import { Text } from "../../../Components/Text/";
import * as S from "./style";

export function Dietician() {
  return (
    <>
      <S.Figure id="titulo">
        <img src={title} alt="titulo da pagina escrito nutrição" />
      </S.Figure>
      <S.container>
        <figure>
          <img
            src={nutri_1}
            alt="uma homem e uma mulher bebendo agua apos exercicio fisico "
          />
        </figure>
        <Text
          title="EMAGRECIMENTO"
          subtitle="Perda de peso e reeducação alimentar"
          main="A perda de peso ocorre quando há um déficit calórico, ou seja, quando você consome menos calorias do que gasta. No entanto, é importante fazer isso de forma saudável e sustentável, garantindo que o corpo receba os nutrientes necessários para funcionar adequadamente. Lembre-se de que cada pessoa é única, e é essencial encontrar uma abordagem nutricional que se adapte ao seu estilo de vida, necessidades e metas específicas de perda de peso."
        />
      </S.container>
      <S.container>
        <figure>
          <img src={nutri_2} alt="homem correndo " />
        </figure>
        <Text
          title="ESPORTIVA"
          subtitle="Melhorar o desempenho esportivo"
          main="A nutrição esportiva é uma área específica da nutrição que se concentra em fornecer aos atletas e praticantes de atividades físicas os nutrientes necessários para melhorar o desempenho esportivo, otimizar a recuperação pós-treino e promover uma saúde geral ideal. A alimentação adequada pode fazer uma grande diferença no desempenho atlético e na capacidade de se recuperar após exercícios intensos"
        />
      </S.container>
      <S.container>
        <figure>
          <img src={nutri_3} alt="mulher gravida " />
        </figure>
        <Text
          title="GESTAÇÃO"
          subtitle="Pré-parto e pós-parto"
          main="Durante a gravidez, a nutrição desempenha um papel fundamental no desenvolvimento saudável do bebê em crescimento e no suporte à saúde da mãe. Uma dieta equilibrada e variada é essencial para fornecer os nutrientes necessários para ambos. É essencial que as mulheres grávidas tenham um acompanhamento médico adequado durante toda a gravidez, incluindo visitas regulares ao médico e ao nutricionista. Cada gravidez é única, e as necessidades nutricionais podem variar. Portanto, um plano de nutrição personalizado pode ser desenvolvido com base nas circunstâncias individuais de cada mulher."
        />
      </S.container>
      <S.container>
        <article className="finaltext">
          <h2>Água é a sua melhor amiga nesse processo</h2>
          <a href="./../../Professionals">Conheça nossa equipe</a>
        </article>
      </S.container>
    </>
  );
}
