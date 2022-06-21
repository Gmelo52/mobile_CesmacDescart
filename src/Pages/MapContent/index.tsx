import React from "react";
import {
  Container,
  CuriView,
  LocView,
  MapImg,
  SubTitleLoc,
  Title,
  TitleLocView,
} from "./styles";

export default function MapContent() {
  return (
    <Container>
      <LocView>
        <TitleLocView>
          <Title>Localização</Title>
          <SubTitleLoc>
            Veja os locais de descarte mais próximos a vc.
          </SubTitleLoc>
        </TitleLocView>
        <MapImg source={require("../../Assets/Images/loc.png")} />
      </LocView>
      <CuriView>
        <Title>Curiosidades</Title>
      </CuriView>
    </Container>
  );
}
