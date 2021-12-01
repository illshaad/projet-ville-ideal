import { Container } from "@mui/material";
import React from "react";
import {
  CardRating,
  RatingGlobal,
  Remark,
  ColorRemarkPositive,
  ColorRemarkNegative,
  Button,
} from "../../../styles/global";

export default function ViewAllRating({ nextStep }) {
  return (
    <Container>
      <RatingGlobal>8/10</RatingGlobal>
      <CardRating>
        <ColorRemarkPositive>
          <Remark>Super Genial</Remark>
        </ColorRemarkPositive>
        <ColorRemarkNegative>
          <Remark>Super Null</Remark>
        </ColorRemarkNegative>
      </CardRating>
      <Button cursor="pointer" onClick={() => nextStep(1)}>
        Noter la ville
      </Button>
    </Container>
  );
}
