import styled from "styled-components";

export const ContainerMenu = styled.header`
  background-color: white;
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  box-shadow: 0px 0px white;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  align-items: center;
  gap: 10px;
  padding-top: ${({ paddingTop }) => paddingTop || null};
  color: white;
`;

export const Button = styled.button`
  background: #3197d4;
  font-size: 15px;
  line-height: 1rem;
  border-radius: 4px;
  width: 140px;
  height: 40px;
  color: #f9f9f9;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5px auto;
  cursor: ${({ cursor }) => cursor || null};
  border: none;
`;

export const Input = styled.input`
  width: 230px;
  height: 50px;
  margin-bottom: 15px;
`;

export const P = styled.p`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  color: ${({ color }) => color || "#95A5BA"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const ContainerSelect = styled.div`
  margin-top: 10px;
  width: 300px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || null};
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Card = styled.div`
  padding: ${({ padding }) => padding || "5px 5px"};
  width: 330px;
  height: 220px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px #3197d4;
`;

export const Perror = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
  font-weight: 800;
`;

export const Form = styled.form`
  gap: 5px;
`;

export const Textarea = styled.textarea`
  width: 320px;
  height: 155px;
  border: none;
  background: #e8e7e8;
  padding: 25px;
  font-size: 15px;
`;

export const Select = styled.select`
  width: 320px;
  height: 30px;
  color: grey;
  font-size: 15px;
  display: flex;
`;

export const PinkArrowRight = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: #6347d1;
`;

export const PinkArrowLeft = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: #6347d1;
`;

export const GreyArrowRight = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: grey;
`;
export const GreyArrowLeft = styled.div`
  cursor: pointer;
  font-size: 28px;
  color: grey;
`;

export const Header = styled.header`
  width: auto;
  height: 80px;
  background: #758ecd;
  margin-top: -21px;
`;

export const CardHome = styled.div`
  margin: 60px auto;
  width: 1280px;
  height: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0px #000000;
  overflow: hidden;
`;

export const Menu = styled.div`
  width: 500px;
`;

export const H1 = styled.h1`
  padding-top: 15px;
  padding-left: 10px;
  color: white;
`;

export const FlexContainerHome = styled.div`
  display: flex;
`;
