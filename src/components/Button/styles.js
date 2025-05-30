

import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: linear-gradient(180deg, rgb(236, 66, 66) 0%, rgb(85, 5, 5) 100%);
  font-size: 18px;
  color: #fff;
  padding: 16px 32px;
  border-radius: 20px;
  cursor: pointer;

  width: fit-content; /* ajusta o tamanho do botão para o conteúdo */

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
