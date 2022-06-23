import React from "react";
import { Container, Img, Text, TextView, Title, TitleView } from "./styles";

export default function Reciclagem() {
  return (
    <Container>
      <TitleView>
        <Title>Dicas de Reciclagem</Title>
      </TitleView>

      <Img source={require("../../../Assets/Images/icon4.png")} />

      <TextView>
        <Text>
          Na sua casa separe as caixas dos medicamentos vencidos ou em desuso e
          as bulas pois estes podem servir como matéria prima para produção de
          novos produtos. {"\n"}Já as embalagens de vidro e de plásticos que
          tiveram contato com os medicamentos, estas devem ser entregues nos
          pontos de coletas de medicamentos. Ex.: Farmácia
        </Text>
      </TextView>
    </Container>
  );
}
