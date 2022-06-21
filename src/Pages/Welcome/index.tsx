import React from "react";
import Background from "../../Components/Background";
import {
  Btn,
  BtnContent,
  BtnIconCont,
  BtnText,
  BtnTextCont,
  Container,
  Content,
  Img,
  SubTitle,
  Title,
} from "./styles";
import { CaretRight } from "phosphor-react-native";
import { theme } from "../../Global/Styles/theme";

export default function Welcome() {
  return (
    <Background>
      <Container>
        <Content>
          <Img source={require("../../Assets/Images/map.png")} />
          <Title>DescarteFarm</Title>
          <SubTitle>
            Olá, Bem-vindo(a) ao App que te ajuda a cuidar do meio ambiente.
          </SubTitle>
        </Content>
        <BtnContent>
          <Btn>
            <BtnTextCont>
              <BtnText>Começar</BtnText>
            </BtnTextCont>
            <BtnIconCont>
              <CaretRight size={32} color={theme.colors.light} />
            </BtnIconCont>
          </Btn>
        </BtnContent>
      </Container>
    </Background>
  );
}
