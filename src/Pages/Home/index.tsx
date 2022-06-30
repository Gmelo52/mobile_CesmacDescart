import React, { useState } from "react";
import Background from "../../Components/Background";
import { BottomMenu, ContentView, IconContainer, IconTitle } from "./styles";
import { House, MapPin, MapTrifold } from "phosphor-react-native";
import { theme } from "../../Global/Styles/theme";
import MapContent from "../MapContent";
import EcoContent from "../EcoContent";

export default function Home() {
  const [contentView, setContentView] = useState(<MapContent />);
  return (
    <Background>
      <ContentView>{contentView}</ContentView>
      <BottomMenu>
        <IconContainer onPress={() => {setContentView(<EcoContent/>)}}>
          <MapPin size={35} color={theme.colors.light} />
          <IconTitle>Ecopontos</IconTitle>
        </IconContainer>
        <IconContainer onPress={() => {setContentView(<MapContent/>)}}>
          <House size={35} color={theme.colors.light} />
          <IconTitle>Home</IconTitle>
        </IconContainer>
        <IconContainer onPress={() => {}}>
          <MapTrifold size={35} color={theme.colors.light} />
          <IconTitle>PEV</IconTitle>
        </IconContainer>
      </BottomMenu>
    </Background>
  );
}
