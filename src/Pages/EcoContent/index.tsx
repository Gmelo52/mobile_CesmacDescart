import React, { useState } from "react";
import EcoItem from "../../Components/EcoItem";
import {
  Container, ContentView, Fab, SubTitle, Title, TitleView,
} from "./styles";
import { Plus } from "phosphor-react-native";
import { theme } from "../../Global/Styles/theme";

export default function EcoContent() {
  return (
    <Container>
      <TitleView>
        <Title>Ecopostos</Title>
        <SubTitle>Locais</SubTitle>
      </TitleView>
      <ContentView showsVerticalScrollIndicator={false}>
        <EcoItem title='Drogasil'/>
        <EcoItem title='Farmácia Permanente'/>
        <EcoItem title='Pague Menos'/>
        <EcoItem title='DrogaRaia'/>
        <EcoItem title='Farmácia do Trabalhador Farol'/>
        <EcoItem title='Drogaria Sampaio'/>
        <EcoItem title='Drogasil'/>
        <EcoItem title='Farmácia Permanente'/>
        <EcoItem title='Pague Menos'/>
        <EcoItem title='Farmácia do Trabalhador Tabuleiro'/>
      </ContentView>
      <Fab>
      <Plus size={35} color={theme.colors.light} weight='bold'/>
      </Fab>
    </Container>
  );
}
