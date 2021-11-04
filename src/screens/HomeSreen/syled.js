import styled from 'styled-components';

export const MainContainer = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  width: 95%;
  height: 40px;
  margin-bottom: 10px;
  align-self: center;
  flex-direction: row;

  justify-content: space-evenly;
`;
export const ImageContainer = styled.View`
    height: 30
    width: 30
    borderRadius: 15
    justify-content: center
    border-width: 1px
    align-self: center
    margin-left: 5px
`;

export const ActionsContainer = styled.View`
    height: 30
    flex-direction: row
    flex: 1
    justify-content: space-evenly
`;

export const SearchInputContainer = styled.View`
  width: 75%;
  border-width: 1px;
`;

export const MessagingContainer = styled.View`
  justify-content: center;
`;

export const Touchable = styled.TouchableOpacity.attrs((props) => ({
  onPress: props.onPress,
}))``;

export const PerActionContainer = styled.View`
    width: 25%
    align-self: center
    flex-direction: column
`;

export const CardContainer = styled.View`
    marginBottom: 10px
    borderStyle: solid
    borderWidth: 1px
    marginHorizontal: 10px
    flex-direction: column
`;

export const PostOwnerContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
`;

export const PostOwnerName = styled.Text`
  align-self: center;
  margin-left: 10px;
  font-weight: bold;
`;

export const PostBody = styled.View`
  justifycontent: center;
  alignself: center;
  padding-horizontal: 10px;
`;
