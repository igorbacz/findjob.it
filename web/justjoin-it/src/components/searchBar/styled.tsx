import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const Container = styled.div`
  margin-top: 3px;
  display: flex;
  background-color: white;
  // gap: 20px;
  width: 100%;

  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const ContainerSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 5px 0px 10px 0px;
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

export const TestingButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(0, 150, 136), rgb(0, 121, 107));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const GameButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(255, 64, 129), rgb(236, 64, 122));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const AnalyticsButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(59, 89, 152), rgb(112, 140, 199));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const SecurityButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(83, 109, 254), rgb(13, 71, 161));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const DotsButton = styled(IconButton)`
  background: white;
  color: grey;
  &:hover {
    background: light-grey;
  }
`;

export const PHPButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(65, 173, 250), rgb(21, 124, 252));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;
export const ScalaButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(248, 100, 104), rgb(241, 70, 76));
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const MobileButton = styled(IconButton)`
  background: linear-gradient(-90deg, rgb(224, 79, 134), rgb(186, 74, 141));
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

export const HeaderMedium = styled.h4`
  color: rgb(119, 119, 119);
  font-weight: 600;
  font-size: 17px;
`;

export const Header200 = styled.h4`
  color: rgb(119, 119, 119);
  font-weight: 200;
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

export const ContextContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const ContextNestedContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;