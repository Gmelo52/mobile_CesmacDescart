import { View, Text } from "react-native";
import React from "react";
import { Container, Icon, IconView, SubTitle, TextView, Title } from "./styles";

type props = {
  title: String;
};

export default function EcoItem({ title }: props) {
  return (
    <Container>
      <TextView>
        <Title>{title}</Title>
        <SubTitle>Endereço</SubTitle>
      </TextView>
      <IconView>
        <Icon source={require("../../Assets/Images/iconEco.png")} />
      </IconView>
    </Container>
  );
}
