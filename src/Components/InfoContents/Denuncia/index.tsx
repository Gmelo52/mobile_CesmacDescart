import React from "react";
import { Container, Img, Text, TextView, Title, TitleView } from "./styles";

export default function Denuncia() {
  return (
    <Container>
      <TitleView>
        <Title>Descarte Incorreto</Title>
      </TitleView>

      <Img source={require("../../../Assets/Images/icon5.png")} />

      <TextView>
        <Text>
          Faça sua Denúncia.
          {"\n"}{"\n"}Secretaria de Desenvolvimento Territorial e Meio Ambiente –
          SEDET {"\n"}Telefone: (82) 3312-5200 {"\n"}Disque Denúncia: (82) 3312-5204{"\n"}{"\n"}
          Denúncia Ambiental e-mail:
          coord.fiscalizacaoambiental@sedet.maceio.al.gov.br. {"\n"}Fone: (82)
          3312-5242
        </Text>
      </TextView>
    </Container>
  );
}
