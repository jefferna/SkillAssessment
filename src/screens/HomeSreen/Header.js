import React from 'react';

import {Text} from 'react-native';

import IconsEntypo from 'react-native-vector-icons/Entypo';

import {
  ImageContainer,
  HeaderContainer,
  MessagingContainer,
  SearchInputContainer,
} from './syled';

const Header = () => {
  return (
    <HeaderContainer>
      <ImageContainer>
        <IconsEntypo name="user" size={20} style={{alignSelf: 'center'}} />
      </ImageContainer>

      <SearchInputContainer />
      <MessagingContainer>
        <IconsEntypo name="message" size={30} style={{alignSelf: 'center'}} />
      </MessagingContainer>
    </HeaderContainer>
  );
};

export default Header;
