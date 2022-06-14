import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 3px;
  display: flex;
  background-color: white;
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

export const HeaderContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const HeaderBig = styled.h4`
  color: rgb(119, 119, 119);
  font-weight: 700;
  font-size: 20px;
`;
export const Header = styled.h5`
  color: rgb(119, 119, 119);
  font-weight: 600;
  font-size: 16px;
`;

// export const ButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;