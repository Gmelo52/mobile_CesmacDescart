import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Container } from './styles';
import {theme} from '../../Global/Styles/theme'

type Props = {
  children: JSX.Element
}

export default function Background({children}:Props) {
  return (
    <LinearGradient colors={[theme.colors.backgroundA, theme.colors.backgroundB, theme.colors.backgroundC]}>
      <Container>
        {children}
      </Container>
    </LinearGradient>
  )
}