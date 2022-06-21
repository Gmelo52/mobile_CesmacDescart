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
  justify-content: center;
  align-items: center;
`;
export const Img = styled.Image`
  width: 250px;
  height: 250px;
  margin: 15px 0;
`;
export const Title = styled.Text`
  color: ${theme.colors.yellowLight};
  font-size: 50px;
  font-family: ${theme.fonts.radBold};
  text-shadow: 0px 4px 4px rgba(0,0,0,0.3);
`;
export const SubTitle = styled.Text`
  color: ${theme.colors.light};
  font-size: 18px;
  font-family: ${theme.fonts.intMed};
  text-shadow: 0px 4px 4px rgba(0,0,0,0.3);
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
`;
export const BtnText = styled.Text`
  font-size: 24px;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.radBold};
`;
export const BtnIconCont = styled.View`
  height: 100%;
  width: 15%;
  position: absolute;
  right: 0px;
  justify-content: center;
  align-items: center;
`;