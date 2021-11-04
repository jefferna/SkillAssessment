import React from 'react';

import {ButtonContainer, ButtonText} from './styled';

const ContinueButton = ({onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>Continue</ButtonText>
    </ButtonContainer>
  );
};

export default ContinueButton;
