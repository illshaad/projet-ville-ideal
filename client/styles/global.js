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
  color: ${({ color }) => color || "#95A5BA"};
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

export const ContainerSelect = styled.div`
  margin-top: 10px;
  width: 300px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

export const Textarea = styled.textarea`
  width: 320px;
  height: 160px;
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
