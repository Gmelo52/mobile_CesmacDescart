import styled from 'styled-components/native'
import { theme } from '../../../Global/Styles/theme';

export const Container = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const TitleView = styled.View`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 120px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.radBold};
  color: ${theme.colors.light};
`;

export const Img = styled.Image`
  margin-top: 5%;
  width: 150px;
  height: 150px;
  resize-mode: contain;
  align-self: center;
  border-radius: 10px;
`;

export const TextView = styled.View`
  background-color: ${theme.colors.backgroundA};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.intMed};
  color: ${theme.colors.light};
`;