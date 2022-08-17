import React from "react";
import { Background, Container, Img, ImgContainer } from "./styles";
import { DataContainerProps } from "./types";

export default function DataContainer({ text, imageName }: DataContainerProps) {
  const Image = require(`../../images/${imageName}`);

  return (
    <Background>
      <Container>
        <ImgContainer>
          <Img src={Image} alt="Nossa Imagem" />
        </ImgContainer>
        <p>{text}</p>
      </Container>
    </Background>
  );
}
