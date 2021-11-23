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

export const Button = styled.a`
  background: #cd9bf6;
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
`;

export const CenterElement = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const Input = styled.input`
  width: 230px;
  height: 50px;
  margin-bottom: 15px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  padding: 60px 20px;
  width: 100%;
  height: 600px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px black;
  text-align: center;
`;

export const Perror = styled.span`
  color: red;
  font-size: 12px
  text-align: center;
  font-weight: 800;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
