import foto_1 from "../../assets/professionals/foto1.svg";
import foto_2 from "../../assets/professionals/foto2.svg";
import foto_3 from "../../assets/professionals/foto3.svg";
import foto_4 from "../../assets/professionals/foto4.svg";
import foto_5 from "../../assets/professionals/foto5.svg";
import foto_6 from "../../assets/professionals/foto6.svg";
import { Head } from "../../Components/Head";
import { Text } from "../../Components/Text/";
import * as S from "./style";

export function Professional() {
  return (
    <>
      <Head
        title="Profissionais"
        description="Aqui voce encontrará todos os profissionais que trabalham com a gente"
      />
      <S.container>
        <figure>
          <img src={foto_1} alt="Homem de camisa rosa" />
        </figure>
        <Text
          title="Vitor"
          subtitle="Nutricionista"
          main="Vitor é um nutricionista altamente qualificado com um mestrado em Nutrição Esportiva pela renomada Universidade de São Paulo (USP). Ele é conhecido por sua paixão pelo esporte desde a infância e sua dedicação em combinar seu amor pelo esporte com sua expertise em nutrição. Vitor acumulou anos de experiência trabalhando com atletas de diversas modalidades esportivas. Ele já colaborou com atletas de elite, como corredores de maratona, jogadores de futebol, nadadores olímpicos e ciclistas de alto desempenho."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={foto_2}
            alt="mulher de cabelo longos e preto vestindo uma blusa branca "
          />
        </figure>
        <Text
          title="Débora"
          subtitle="Nutricionista"
          main=" Débora é uma nutricionista altamente qualificada, com um diploma de graduação em Nutrição e um mestrado em Nutrição Clínica pela Universidade Federal de São Paulo (UNIFESP). Ela é reconhecida por sua paixão pela saúde das mulheres, com foco especial na gestão de peso durante a gravidez e na nutrição pós-parto. Débora acumulou anos de experiência trabalhando com mulheres em diferentes fases da vida, com destaque para a gestação e o pós-parto. Ela já colaborou com maternidades, clínicas de obstetrícia e hospitais, prestando consultoria nutricional a mulheres grávidas e lactantes."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={foto_3}
            alt="mulher de cabelo longos e preto vestindo uma blusa social preta "
          />
        </figure>
        <Text
          title="Patricia"
          subtitle="Fisioterapeuta"
          main="Patrícia é uma fisioterapeuta altamente qualificada, com um diploma de graduação em Fisioterapia e uma pós-graduação em Traumatologia Ortopédica pela Universidade de São Paulo (USP). Sua paixão pela recuperação de pacientes com lesões ortopédicas a levou a se especializar nessa área. Patrícia tem uma vasta experiência trabalhando com pacientes que sofreram traumas ortopédicos, como fraturas, lesões de ligamentos e cirurgias ortopédicas. Ela já colaborou com hospitais, clínicas de reabilitação e consultórios particulares, fornecendo tratamento fisioterapêutico personalizado para ajudar os pacientes a recuperarem sua mobilidade e qualidade de vida."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={foto_4}
            alt="Homem de cabelos curto preto vestindo uma blusa branca "
          />
        </figure>
        <Text
          title="Caio"
          subtitle="Fisioterapeuta"
          main="Caio é um fisioterapeuta altamente qualificado, com formação em Fisioterapia e especialização em Pilates Clínico e Quiropraxia pela renomada Escola Brasileira de Quiropraxia e pela Federação Brasileira de Pilates. Sua paixão pela reabilitação física o levou a se dedicar a essas duas áreas complementares. Caio possui uma vasta experiência trabalhando com pacientes que buscam reabilitação física, alívio da dor e melhoria da postura. Ele já trabalhou em clínicas especializadas em Pilates e Quiropraxia, onde aprimorou suas habilidades no tratamento de condições musculoesqueléticas."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={foto_5}
            alt="Homem negro de cabelos curto, vestindo uma blusa rosa "
          />
        </figure>
        <Text
          title="Dr.Pedro"
          subtitle="Psiquiatra"
          main="Dr. Pedro é um psiquiatra altamente qualificado, com graduação em Medicina e especialização em Psiquiatria pela Universidade Federal do Rio de Janeiro (UFRJ). Ele continuou sua educação com um mestrado em Psicofarmacologia, contribuindo para sua compreensão abrangente das questões relacionadas à saúde mental. Pedro possui uma ampla experiência no campo da psiquiatria, tendo trabalhado em uma variedade de configurações clínicas. Ele tem décadas de experiência no tratamento de pacientes com uma variedade de distúrbios mentais, incluindo depressão, transtorno de ansiedade, transtorno bipolar e esquizofrenia. Além disso, ele é conhecido por sua compaixão e empatia no atendimento aos pacientes."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={foto_6}
            alt="mulher negra , como cabelos logos e preso vestindo uma blusa rosa  "
          />
        </figure>
        <Text
          title="Priscila"
          subtitle="Psicologa"
          main="Priscila é uma psicóloga altamente qualificada, com uma graduação em Psicologia e mestrado em Psicologia Clínica pela Universidade Estadual de São Paulo (UNESP). Ela é apaixonada pelo campo da psicologia e dedicada a ajudar pessoas a superarem desafios emocionais e alcançarem seu potencial máximo.Priscila adota uma abordagem humanista e centrada no cliente em sua prática clínica. Ela acredita na importância de criar um ambiente seguro e de apoio para seus pacientes, onde eles possam explorar seus sentimentos e pensamentos de maneira aberta e sem julgamento."
        />
      </S.container>
      <S.container>
        <figure>
          <img
            src={foto_3}
            alt="mulher de cabelo longos e preto vestindo uma blusa social preta  "
          />
        </figure>
        <Text
          title="Marta"
          subtitle="Psicanálista"
          main="Marta é uma psicanalista altamente qualificada, com uma sólida formação em Psicologia e uma especialização em Psicanálise pela Sociedade Brasileira de Psicanálise. Ela é apaixonada pela exploração das profundezas da mente humana e pela compreensão dos processos inconscientes que influenciam o comportamento e as emoções.Marta adota uma abordagem psicanalítica clássica em sua prática clínica. Ela acredita na importância da análise profunda do inconsciente, explorando os complexos mecanismos psicológicos que moldam o pensamento, o comportamento e as emoções de seus pacientes."
        />
      </S.container>
    </>
  );
}
