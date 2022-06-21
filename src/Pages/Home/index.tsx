import { View, Text } from "react-native";
import React, { useState } from "react";
import Background from "../../Components/Background";
import { BottomMenu, ContentView, IconContainer } from "./styles";
import { House, MapPin, MapTrifold } from "phosphor-react-native";
import { theme } from "../../Global/Styles/theme";
import MapContent from "../MapContent";

export default function Home() {
  const [contentView, setContentView] = useState(<MapContent />);
  return (
    <Background>
      <ContentView>{contentView}</ContentView>
      <BottomMenu>
        <IconContainer onPress={() => {}}>
          <MapPin size={35} color={theme.colors.light} />
        </IconContainer>
        <IconContainer onPress={() => {}}>
          <House size={35} color={theme.colors.light} />
        </IconContainer>
        <IconContainer onPress={() => {}}>
          <MapTrifold size={35} color={theme.colors.light} />
        </IconContainer>
      </BottomMenu>
    </Background>
  );
}
