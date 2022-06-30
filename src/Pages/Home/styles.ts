import styled from 'styled-components/native';
import { theme } from '../../Global/Styles/theme';

export const ContentView = styled.View`
  width: 100%;
  height: 90%;
`;
export const BottomMenu = styled.View`
  width: 100%;
  height: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const IconContainer = styled.TouchableOpacity`
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const IconTitle = styled.Text`
  font-family: ${theme.fonts.radMed};
  color: ${theme.colors.light};
  font-size: 11px;
`;