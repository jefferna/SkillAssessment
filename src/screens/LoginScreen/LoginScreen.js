import React, {useState} from 'react';

import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import {
  MainContainer,
  ScreenHeader,
  LogoContainer,
  JoinNowContainer,
  TouchableText,
  SignInFormContainer,
  StyledText,
  StyledTextContainer,
  TextInputContainer,
  CheckBoxContainer,
  CheckBoxLabel,
} from './styled';

import ContinueButton from './ContinueButton';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleJoinNowPress = () => {
    console.log('Join Now Button Pressed');
  };

  const handleContinueButtonPress = () => {
    if (username === 'Adminuser' && password === 'Admin123') {
      return navigation.navigate('BottomTabNavigator');
    }

    Alert.alert('Wrong Password');
  };

  const handleInputChangeUsername = (username) => {
    setUsername(username);
  };

  const handleInputChangePassword = (password) => {
    setPassword(password);
  };
  return (
    <SafeAreaView>
      <ScreenHeader>
        <Image
          source={require('../../assets/linkedinlogo.png')}
          style={{
            height: 30,
            width: 70,
          }}
          resizeMode="contain"
        />
        <JoinNowContainer>
          <TouchableText onPress={handleJoinNowPress}>
            <Text>Join Now</Text>
          </TouchableText>
        </JoinNowContainer>
      </ScreenHeader>
      <SignInFormContainer>
        <StyledText>Sign In</StyledText>
        <TextInputContainer>
          <TextInput
            placeholder={'Email or Phone'}
            onChangeText={handleInputChangeUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </TextInputContainer>

        <TextInputContainer>
          <TextInput
            placeholder={'Password'}
            onChangeText={handleInputChangePassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </TextInputContainer>
        <CheckBoxContainer>
          <CheckBox value={true} onValueChange={() => console.log('wewew')} />
          <CheckBoxLabel>Remember me</CheckBoxLabel>
        </CheckBoxContainer>
        <ContinueButton onPress={handleContinueButtonPress} />
      </SignInFormContainer>
    </SafeAreaView>
  );
};

export default LoginScreen;
