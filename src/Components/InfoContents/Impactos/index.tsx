import React from "react";
import { Container, Img, Text, TextView, Title, TitleView } from "./styles";

export default function Impactos() {
  return (
    <Container>
      <TitleView>
        <Title>Impactos Ambientais</Title>
      </TitleView>

      <Img source={require("../../../Assets/Images/global.png")} />

      <TextView>
        <Text>
          As consequências do descarte incorreto de medicamentos são a
          contaminação de rios, lagos, solos e poluição do ar atmosférico.
          {"\n"}No ambiente marinho os medicamentos hormonais causam efeminação
          de peixes machos, nos solos podem contaminar o lençol freático e
          queima de medicamentos ao ar livre libera substâncias tóxicas ao meio
          ambiente.
        </Text>
      </TextView>
    </Container>
  );
}
