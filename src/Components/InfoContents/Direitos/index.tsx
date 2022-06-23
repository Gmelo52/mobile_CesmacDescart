import React from "react";
import { Container, Img, Text, TextView, Title, TitleView } from "./styles";

export default function Direitos() {
  return (
    <Container>
      <TitleView>
        <Title>Conheça seus direitos</Title>
      </TitleView>

      <Img source={require("../../../Assets/Images/icon3.png")} />

      <TextView>
        <Text>
          {"\n"}O Decreto nº 10.388/2020 instituiu a logística reversa para os
          medicamentos e suas embalagens. {"\n"}Assim as farmácias selecionadas
          deverão receber os medicamentos domiciliares vencidos ou em desuso e
          suas embalagens, pelo consumidor.
        </Text>
      </TextView>
    </Container>
  );
}
