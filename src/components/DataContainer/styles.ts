import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  background-color: #8da6c2;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  border: 1px solid black;
  background-color: #85a0aa;
  margin-top: 5%;

  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

export const ImgContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #54656b;
  margin: 5% 0 0 0;

  @media (orientation: landscape) {
    width: 50%;
    height: 85%;
  }

  @media (orientation: portrait) {
    width: 85%;
    height: 70%;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

export const Text = styled.p`
  text-align: center;
  max-height: 100%;
`;
