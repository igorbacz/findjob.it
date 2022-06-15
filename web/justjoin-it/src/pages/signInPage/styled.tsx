import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
`;

export const Container = styled.div`
  padding: 25px 0px 25px 0px;
  width: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 30px;
`;

export const LinkContainer = styled.div`
  text-align: right;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ResetLink = styled.a`
  color: #039be5;
  text-decoration: none;
`;