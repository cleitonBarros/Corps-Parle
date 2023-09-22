import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/svg/logoname.svg";
import { UseWindowSize } from "../../hook/useWidthSize";
import * as S from "./style";

import * as Dialog from "@radix-ui/react-dialog";

export function SiderMenu() {
  const [open, setOpen] = React.useState(false);
  const [width] = UseWindowSize();
  React.useEffect(() => {
    if (width >= 765) {
      setOpen(false);
    }
  }, [width]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <S.Hamburger className={open ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </S.Hamburger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <S.Sidebar className={open ? "open" : ""}>
          <S.Menu>
            <figure className="logo">
              <img src={logo} alt="logo" />
            </figure>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setOpen(false)}>
                  Quem Somos
                </NavLink>
              </li>
              <li>
                <NavLink to="/professionals" onClick={() => setOpen(false)}>
                  Profissionais
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setOpen(false)}>
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setOpen(false)}>
                  Contato
                </NavLink>
              </li>
            </ul>
          </S.Menu>
        </S.Sidebar>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
