import styled from 'styled-components/native';

export const PostContainer = styled.View`
  marginbottom: 10px;
  borderstyle: solid;
  borderwidth: 1px;
  marginhorizontal: 10px;
  flex-direction: column;
`;

export const ReactionsContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
  width: 100%;
  margin-top: 10px;
`;

export const Reactions = styled.Text`
  align-content: flex-start;
`;

export const Comments = styled.Text`
  position: absolute;
  right: 0;
  align-content: flex-end;
  padding-right: 10px;
`;

export const ActionsContainer = styled.View`
    height: 30
    flex-direction: row
    flex: 1
    justify-content: space-evenly
    background-color: red
`;

export const CommentContainer = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
  margin-top: 10px;
`;
