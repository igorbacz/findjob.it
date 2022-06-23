import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 59%;
  height: 77px;
  border-radius: 10px;
  background: white;
  margin: 5px;
  padding: 6px;

  -webkit-box-shadow: 24px 19px 32px -31px rgba(66, 68, 90, 0.57);
  -moz-box-shadow: 24px 19px 32px -31px rgba(66, 68, 90, 0.57);
  box-shadow: 24px 19px 32px -31px rgba(66, 68, 90, 0.57);
`;

export const Img = styled.img`
  width: 60px;
  padding: 10px 60px 10px 30px;
`;

export const Description = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h4`
  color: #6b6b6b;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Paragraph = styled.p`
  padding: 10px 10px 10px 10px;
  font-size: 10px;
  color: #a9a6a6;
`;

export const AmountWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Amount = styled.h3`
  font-weight: 200;
  color: rgb(30, 198, 108);
  font-family: "Open Sans", sans-serif;
  font-size: 1.5rem;
`;
