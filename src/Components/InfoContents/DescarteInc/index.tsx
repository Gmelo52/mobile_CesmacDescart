import React from "react";
import { Container, Img, Text, TextView, Title, TitleView } from "./styles";

export default function DescarteInc() {
  return (
    <Container>
      <TitleView>
        <Title>Descarte Incorreto</Title>
      </TitleView>

      <Img source={require("../../../Assets/Images/toilet.png")} />

      <TextView>
        <Text>
          Lugares onde não se é incorreto descartar medicamentos?{'\n'}{'\n'}
          - Vaso sanitário;{'\n'}
          - Lixo Comum;{'\n'}
          - Pia;
        </Text>
      </TextView>
    </Container>
  );
}
