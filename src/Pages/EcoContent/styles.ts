import styled from "styled-components/native";
import { theme } from "../../Global/Styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const TitleView = styled.View`
  justify-content: flex-end;
  align-items: baseline;
  width: 100%;
  height: 20%;
  padding: 20px 0;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.radBold};
  color: ${theme.colors.light};
`;
export const SubTitle = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.intReg};
  color: ${theme.colors.light};
`;
export const ContentView = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const Fab = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: ${theme.colors.yellowLight};
  border-radius: 300px;
  position: absolute;
  right: 5px;
  bottom: 10px;
  justify-content: center;
  align-items: center;
`;