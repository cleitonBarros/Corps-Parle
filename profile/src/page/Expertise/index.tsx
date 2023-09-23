import { Head } from "../../Components/Head";
import * as S from "./style";

export function Services() {
  return (
    <>
      <Head
        title="Serviços Medicos"
        description="Nessa pagina você entrará as areas que nossa clinica atende, sendo elas: nutrição, fisioterapia e mente e psiquê"
      />
      <S.container>
        <article>
          <div></div>
          <h2>NOSSOS SERVIÇOS MÉDICOS</h2>
          <div></div>
        </article>
        <S.Slider>
          <li className="card card-1">
            <a className="nutri" href="/services/nutricionista">
              Nutrição
            </a>
          </li>
          <li className="card card-2">
            <a className="fisio" href="/services/fisioterapia">
              Fisioterapia
            </a>
          </li>
          <li className="card card-3">
            <a className="psique" href="/services/menteepsique">
              Mente <br />
              e <br />
              Psiquê
            </a>
          </li>
        </S.Slider>
      </S.container>
    </>
  );
}
