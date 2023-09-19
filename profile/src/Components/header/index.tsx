import { NavLink } from "react-router-dom";

import logo from "../../assets/svg/logo.svg";
import { SiderMenu } from "../sidebar";
import logoName from "./../../assets/svg/logoname.svg";
import * as S from "./style";

import {
  EnvelopeSimple,
  InstagramLogo,
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
          <SiderMenu />
        </div>
      </S.Text>
      <S.Middle>
        <figure>
          <img src={logoName} alt="nome da clinica Corps Parle" />
        </figure>
      </S.Middle>
      <S.Nav>
        <ul>
          <li>
            <NavLink to="#">Inicio </NavLink>
          </li>
          <li>
            <NavLink to="#">Quem Somos </NavLink>
          </li>
          <li>
            <NavLink to="#">Profissionais </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <img src={logo} alt="logo um corpo rosa" />
            </NavLink>
          </li>
          <li>
            <NavLink to="#">Serviço medico</NavLink>
          </li>
          <li>
            <NavLink to="#">Contato</NavLink>
          </li>
        </ul>
      </S.Nav>
    </S.Container>
  );
}
