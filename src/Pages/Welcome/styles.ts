import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";
import { theme } from '../../Global/Styles/theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
export const Content = styled.View`
  width: 100%;
  height: 80%;
`;
export const BtnContent = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;
export const Btn = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 2px solid;
  border-color: ${theme.colors.yellowDark};
  flex-direction: row;
`;
export const BtnTextCont = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
export const BtnText = styled.Text`
  font-size: 24px;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.radBold};
`;
export const BtnIconCont = styled.View`
  height: 100%;
  width: 15%;
  background-color: blue;
  position: absolute;
  right: 0px;
`;