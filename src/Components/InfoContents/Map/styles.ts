import styled from "styled-components/native";
import { theme } from "../../../Global/Styles/theme";

export const LocView = styled.View`
  width: 100%;
  height: 80%;
`;

export const TitleLocView = styled.View`
  justify-content: flex-end;
  align-items: baseline;
  width: 100%;
  height: 20%;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.radBold};
  color: ${theme.colors.light};
`;

export const SubTitleLoc = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.intReg};
  color: ${theme.colors.light};
`;

export const MapImg = styled.Image`
  margin-top: 5%;
  width: 100%;
  max-height: 70%;
  resize-mode: cover;
  align-self: center;
  border-radius: 10px;
`;