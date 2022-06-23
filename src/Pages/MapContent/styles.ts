import styled from "styled-components/native";
import { theme } from "../../Global/Styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.radBold};
  color: ${theme.colors.light};
`;

export const CuriView = styled.View`
  width: 100%;
  height: 20%;
`;
export const ScrollBtnView = styled.ScrollView`
  flex: 1;
`;

export const BtnIcon = styled.Image`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 7px;
  bottom: 7px;
`;

