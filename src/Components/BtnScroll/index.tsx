import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TitleText, TitleView } from "./styles";

type Props = TouchableOpacityProps & {
  children: JSX.Element;
  title: string;
};


export default function BtnScroll({ title, children, ...rest}: Props) {
  return (
    <Container {...rest}>
      <TitleView>
        <TitleText>{title}</TitleText>
      </TitleView>
      {children}
    </Container>
  );
}
