import { theme } from './../../Global/Styles/theme';
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 85px;
  width: 130px;
  border-radius: 10px;
  background-color: ${theme.colors.light};
  margin: 10px 10px 10px 0;
`;

export const TitleView = styled.View`
  width: 100%;
  height: 60%;
  padding: 7px;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.radBold};
  color: ${theme.colors.backgroundB};
`;