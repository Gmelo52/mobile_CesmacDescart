import React from "react";
import { LocView, MapImg, SubTitleLoc, Title, TitleLocView } from "./styles";

export default function Map() {
  return (
    <LocView>
      <TitleLocView>
        <Title>Localização</Title>
        <SubTitleLoc>
          Veja os locais de descarte mais próximos a vc.
        </SubTitleLoc>
      </TitleLocView>
      <MapImg source={require("../../../Assets/Images/loc.png")} />
    </LocView>
  );
}
