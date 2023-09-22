import * as S from "./style";

import { EnvelopeSimple, MapPinLine, Phone } from "@phosphor-icons/react";

export function Contact() {
  return (
    <>
      <S.container>
        <header>
          <div></div>
          <h2>contato</h2>
          <div></div>
        </header>
        <article>
          <aside>
            <hgroup>
              <div className="title">
                <span></span>
                <h2>Entre em contato!</h2>
              </div>
              <p>
                Tenha toda informação e suporte que precisa. Preencha nosso
                formulário e retornaremos o mais breve possível.
              </p>
            </hgroup>
            <ul>
              <li>
                <Phone size={32} />
                <span>(24)9999-9999</span>
              </li>
              <li>
                <MapPinLine size={32} />
                <span>Rua Lorem ipsum dolor, nº 350 - consectetur</span>
              </li>
              <li>
                <EnvelopeSimple size={32} />
                <span>corpsparle@contacto.com</span>
              </li>
            </ul>
          </aside>
          <form>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="nome" />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input type="text" id="phone" placeholder="telefone" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email" />
            </div>
            <div>
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
                id="description"
                placeholder="Descrição..."
              ></textarea>
            </div>

            <button>Enviar</button>
          </form>
        </article>
        <footer></footer>
      </S.container>
    </>
  );
}
