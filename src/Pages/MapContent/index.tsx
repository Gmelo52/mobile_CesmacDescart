import React, { useState } from "react";
import BtnScroll from "../../Components/BtnScroll";
import Denuncia from "../../Components/InfoContents/Denuncia";
import DescarteInc from "../../Components/InfoContents/DescarteInc";
import Direitos from "../../Components/InfoContents/Direitos";
import Impactos from "../../Components/InfoContents/Impactos";
import Map from "../../Components/InfoContents/Map";
import Reciclagem from "../../Components/InfoContents/Reciclagem";
import {
  BtnIcon,
  Container,
  CuriView,
  ScrollBtnView,
  Title
} from "./styles";

export default function MapContent() {
  const [content, setContent] = useState(<Map/>)

  return (
    <Container>
      {content}
      <CuriView>
        <Title>Curiosidades</Title>
        <ScrollBtnView horizontal showsHorizontalScrollIndicator={false}>
          <BtnScroll title="Locais Próximos" onPress={()=> setContent(<Map/>)}>
            <BtnIcon source={require('../../Assets/Images/icon0.png')}/>
          </BtnScroll>
          <BtnScroll title="Descarte Incorreto" onPress={()=> setContent(<DescarteInc/>)}>
            <BtnIcon source={require('../../Assets/Images/icon1.png')}/>
          </BtnScroll>
          <BtnScroll title="Impactos Ambientais" onPress={()=> setContent(<Impactos/>)}>
            <BtnIcon source={require('../../Assets/Images/icon2.png')}/>
          </BtnScroll>
          <BtnScroll title="Conheça seus Direitos" onPress={()=> setContent(<Direitos/>)}>
            <BtnIcon source={require('../../Assets/Images/icon3.png')}/>
          </BtnScroll>
          <BtnScroll title="Reciclagem" onPress={()=> setContent(<Reciclagem/>)}>
            <BtnIcon source={require('../../Assets/Images/icon4.png')}/>
          </BtnScroll>
          <BtnScroll title="Denúncia" onPress={()=> setContent(<Denuncia/>)}>
            <BtnIcon source={require('../../Assets/Images/icon5.png')}/>
          </BtnScroll>
        </ScrollBtnView>
      </CuriView>
    </Container>
  );
}
