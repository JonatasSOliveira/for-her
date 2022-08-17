import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: #85a0aa;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  border: 1px solid black;
  width: 85%;
  height: 85%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  width: 70vw;
  height: 70vw;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
