import styled from "styled-components/native";
import { theme } from "../../Global/Styles/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.light};
  border-radius: 10px;
  margin-bottom: 10px;
  flex-direction: row;
`;
export const TextView = styled.View`
  height: 100%;
  width: 80%;
  justify-content: center;
  padding: 0 10px;
`;
export const Title = styled.Text`
  font-size: 16px;
  color: ${theme.colors.backgroundB};
  font-family: ${theme.fonts.radBold};
`;
export const SubTitle = styled.Text`
  font-size: 12px;
  color: ${theme.colors.backgroundA};
  font-family: ${theme.fonts.intReg};
`;
export const IconView = styled.View`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 23px;
  height: 30px;
`;