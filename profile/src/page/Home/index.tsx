import { Link } from "react-router-dom";

import woman from "../../assets/svg/woman.svg";
import * as S from "./style";

export function Home() {
  return (
    <S.Bg>
      <S.container>
        <div className="text-group">
          <h2>MEDICINA PARA TODOS</h2>
          <p>
            Proporcionamos a restauração da sua saúde física e mental,
            permitindo que você viva uma vida extraordinariamente longa e plena.
          </p>
          <Link to="#">Conheça a nossa equipe </Link>
        </div>
        <figure>
          <img src={woman} alt="imagem de uma mulher feliz saltitando " />
        </figure>
      </S.container>
    </S.Bg>
  );
}
