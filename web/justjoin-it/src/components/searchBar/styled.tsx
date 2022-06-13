import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 3px;
  display: flex;
`;

export const ContainerSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border: 2px solid #f6f4f4;
  height: 30px;
  border-radius: 50px;
  background-color: #f6f4f4;
  text-align: center;
  &:hover {
    border-color: rgb(232, 232, 232);
    background-color: rgb(232, 232, 232);
  }
`;

export const IconContainer = styled.div`
  padding: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    color: #ff4081;
  }
`;

export const IconText = styled.span`
  font-size: 10px;
`;
