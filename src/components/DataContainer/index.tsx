import React, { useEffect, useState } from "react";
import { ONE_SECOND_IN_MS } from "../../constants/time";
import {
  Background,
  Container,
  Img,
  ImgContainer,
  Text,
  TextContainer,
} from "./styles";
import { DataContainerProps } from "./types";

export default function DataContainer({ text, imageName }: DataContainerProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    function typeWritter() {
      if (displayText.length !== text.length) {
        setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, ONE_SECOND_IN_MS / 20);
      }
    }

    typeWritter();
  }, [text, displayText]);

  const Image = require(`../../images/${imageName}`);

  return (
    <Background>
      <Container>
        <ImgContainer>
          <Img src={Image} alt="Nossa Imagem" />
        </ImgContainer>
        <TextContainer>
          <Text className="anime-typewriter">{displayText}</Text>
        </TextContainer>
      </Container>
    </Background>
  );
}
