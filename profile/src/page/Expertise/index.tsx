import { Link } from "react-router-dom";

import * as S from "./style";

export function Services() {
  return (
    <>
      <S.container>
        <article>
          <div></div>
          <h2>NOSSOS SERVIÇOS MÉDICOS</h2>
          <div></div>
        </article>
        <S.Slider>
          <li className="card card-1">
            <Link className="nutri" to="/services/nutricionista">
              Nutrição
            </Link>
          </li>
          <li className="card card-2">
            <Link className="fisio" to="/services/fisioterapia">
              Fisioterapia
            </Link>
          </li>
          <li className="card card-3">
            <Link className="psique" to="/services/menteepsique">
              Mente <br />
              e <br />
              Psiquê
            </Link>
          </li>
        </S.Slider>
      </S.container>
    </>
  );
}
