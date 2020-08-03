import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { TeacherItemArticle } from './styles';

export default function TeacherItem() {
  return (
    <TeacherItemArticle>
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/38765245?s=460&u=7fc0522151d797c0ac7986b49348d295b5574d95&v=4"
          alt="Ricardo Balbi"
        />
        <div>
          <strong>Ricardo Balbi</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Texto sobre o professor.
        <br />
        <br />
        Mais texto.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </TeacherItemArticle>
  );
}
