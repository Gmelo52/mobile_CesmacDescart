import React from "react";
import Background from "../../Components/Background";
import { Btn, BtnContent, BtnIconCont, BtnText, BtnTextCont, Container, Content } from "./styles";

export default function Welcome() {
  return (
    <Background>
      <Container>
        <Content></Content>
        <BtnContent>
          <Btn>
            <BtnTextCont>
              <BtnText>Começar</BtnText>
            </BtnTextCont>
            <BtnIconCont>

            </BtnIconCont>
          </Btn>
        </BtnContent>
      </Container>
    </Background>
  );
}
