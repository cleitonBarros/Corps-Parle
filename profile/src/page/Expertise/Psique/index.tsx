import psique_1 from "../../../assets/svg/psique_1.svg";
import psique_2 from "../../../assets/svg/psique_2.svg";
import psique_3 from "../../../assets/svg/psique_3.svg";
import title from "../../../assets/svg/titlePsique.svg";
import { Head } from "../../../Components/Head";
import { Text } from "../../../Components/Text/";
import * as S from "./style";

export function Psique() {
  return (
    <>
      <Head
        title="Mente e psiquê"
        description="PSIQUIATRIA, PSICOLOGIA e PSICANÁLISE"
      />
      <S.Figure id="titulo">
        <img src={title} alt="titulo da pagina escrito Psique" />
      </S.Figure>
      <S.container>
        <figure>
          <img
            src={psique_1}
            alt="uma homem e uma mulher bebendo agua apos exercicio fisico "
          />
        </figure>
        <Text
          title="Psiquiatria"
          subtitle="Diagnóstico, tratamento, prevenção e reabilitação"
          main="Especialidade médica que tem como finalidade o diagnóstico, tratamento, prevenção e reabilitação dos mais variados distúrbios mentais, sejam eles de origem orgânica ou funcional. Algumas doenças tratadas são: depressão, esquizofrenia, transtorno bipolar, TOC e TDAH."
        />
      </S.container>
      <S.container>
        <figure>
          <img src={psique_2} alt="homem correndo " />
        </figure>
        <Text
          title="Psicologia"
          subtitle="Pensar, sentir e agir."
          main="Psicologia é a área da ciência que estuda a mente e o comportamento humano e as suas interações com o ambiente físico e social. O objetivo da psicologia é diagnosticar, compreender, explicar e orientar a mudança de comportamentos humanos."
        />
      </S.container>
      <S.container>
        <figure>
          <img src={psique_3} alt="mulher gravida " />
        </figure>
        <Text
          title="psicanálise"
          subtitle="Ego, superego e id"
          main="Originada a partir da medicina, tem como intenção mergulhar na psique humana e estudar os fatores escondidos na mente inconsciente. A psicanálise é uma abordagem psicoterapêutica cujo objetivo é identificar a relação entre o inconsciente e os sentimentos, pensamentos e ações do indivíduo."
        />
      </S.container>
      <S.container>
        <article className="finaltext">
          <h2>Será que Freud realmente explica tudo ?</h2>
          <a href="./../../Professionals">Conheça nossa equipe</a>
        </article>
      </S.container>
    </>
  );
}
