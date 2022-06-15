import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

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
`;

export const CSSButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(82, 102, 225), rgb(129, 102, 224));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const JSButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(255, 199, 6), rgb(255, 175, 0));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;
export const HTMLButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(255, 125, 80), rgb(253, 93, 33));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const PythonButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(31, 94, 182), rgb(31, 123, 196));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const JavaButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(250, 101, 107), rgb(249, 89, 122));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const ReactButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(2, 175, 235), rgb(27, 104, 194));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const NodeButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(137, 219, 84), rgb(101, 175, 53));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const VueButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(47, 207, 187), rgb(55, 221, 156));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const AngularButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const GHButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const IconText = styled.span`
  margin-top: 8px;
  font-size: 11px;
  font-weight: 300;
  color: #757575;
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;