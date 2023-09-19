import * as S from "./style";

import {
  EnvelopeSimple,
  InstagramLogo,
  List,
  WhatsappLogo
} from "@phosphor-icons/react";

export function Header() {
  return (
    <S.Container>
      <S.Text>
        <article>
          <p>Também realizando consultas online !</p>
        </article>
        <div className="social-group">
          <ul className="social-link">
            <li>
              <a href="#">
                <WhatsappLogo size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <EnvelopeSimple size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramLogo size={32} />
              </a>
            </li>
          </ul>
          <div className="menu">
            <List size={32} />
          </div>
        </div>
      </S.Text>
    </S.Container>
  );
}
