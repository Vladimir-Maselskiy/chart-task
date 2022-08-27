import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
  padding: 20px 10px;
  height: 100%;
  overflow-y: scroll;
`;
export const MessageItem = styled.li`
  position: relative;
  display: flex;
  max-width: 70%;
  align-items: center;
  list-style: none;
  margin: 10px 0;
  margin-right: ${props => {
    return props.type !== 'outgoing' ? 'auto' : 0;
  }};
`;

export const MessageStyled = styled.div`
  position: relative;
  display: inline-block;
  align-items: center;
  min-height: 40px;
  padding: 15px 10px;
  margin-left: 10px;
  color: ${props => {
    return props.type !== 'outgoing' ? '#fff' : '#000';
  }};
  background-color: ${props => {
    return props.type !== 'outgoing' ? '#3c4251' : '#e0e0e0';
  }};
  border-radius: 20px;
`;
