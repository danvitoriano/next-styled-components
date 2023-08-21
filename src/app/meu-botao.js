"use client"
import styled from "styled-components";

const Button = styled.button`
  color: red;
  font-size: 20px;
  cursor: pointer;
`;

export default function MeuBotao({ text }) {
  return (
    <Button>
      {text}
    </Button>
  );
}