import React from "react";
import { CardHome, P, Card, FlexContainer } from "../../styles/global";
import Popover from "../popover/Popover";

export default function Admin() {
  return (
    <CardHome width="1200px" height="500px">
      <P fontSize="30px">Shadd Admin</P>
      <FlexContainer flexDirection="column" margin="0px">
        <Card width="1000px" height="70px">
          <FlexContainer margin="0px">
            <P>Speudo</P>
            <P>Email</P>
            <P>Status</P>
            <P>Ville</P>
            <Popover sx={{ p: 1 }} />
          </FlexContainer>
        </Card>
      </FlexContainer>
    </CardHome>
  );
}
