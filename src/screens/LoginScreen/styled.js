import type {ComponentType} from 'react';
import styled from 'styled-components/native';

import {TouchableOpacity, Text, Platform} from 'react-native';

export const MainContainer: ComponentType<any> = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ScreenHeader: ComponentType<any> = styled.View`
  flex-direction: row
  margin-horizontal: 20px

`;

export const LogoContainer: ComponentType<any> = styled.View`
  justify-content: flex-start;
`;

export const JoinNowContainer: ComponentType<any> = styled.View`
  justify-content: flex-end;
  position: absolute
  right: 0
`;

export const TouchableText: ComponentType<any> = styled(TouchableOpacity).attrs(
  (props) => ({
    onPress: props.onPress,
  }),
)``;

export const SignInFormContainer: ComponentType<any> = styled.View`
  margin-horizontal: 20px;
  margin-top: 20px;
  justify-content: center;
`;

export const StyledTextContainer: ComponentType<any> = styled.View`
  justify-content: flex-end;
`;

export const StyledText: ComponentType<any> = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;
export const TextInputContainer: ComponentType<any> = styled.View`
  margin-top: 15px
  padding-vertical: 20px;
  border-bottom-width: 1px
  border-bottom-color: black
`;

export const ButtonContainer: ComponentType<any> = styled.TouchableOpacity.attrs(
  (props) => ({
    onPress: props.onPress,
  }),
)`
  height: 40px
  background-color: blue
  width: 100%
  border-radius: 50px
  justify-content: center
  margin-top: 20px
`;

export const ButtonText: ComponentType<any> = styled.Text`
  color: white
  align-self: center
  font-weight: bold;
`;

export const CheckBoxContainer: ComponentType<any> = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const CheckBoxLabel: ComponentType<any> = styled.Text`
  margin-left: 5px
  align-self: center;
`;
