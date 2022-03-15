import { Container } from "@mui/material";
import React from "react";
import { FlexElementCard, P } from "../../../styles/global";
import Popover from "../../popover/Popover";
import { useDataCity } from "../../../context/context";
import { Card, Text, Divider, Row, Button, Spacer } from "@nextui-org/react";

export default function ViewAllRating({ nextStep }) {
  const { selectCityInfoWindows } = useDataCity();
  return (
    <Container>
      <br />
      <FlexElementCard>
        <P fontSize="15px" style={{ fontWeight: "bold" }}>
          {selectCityInfoWindows?.nom}
        </P>
        <P fontSize="15px" style={{ fontWeight: "bold" }}>
          {selectCityInfoWindows?.departement.nom}
        </P>
      </FlexElementCard>
      <Card hoverable>
        <Card.Header>
          <Text color="secondary">Note moyenne 8/10</Text>
        </Card.Header>
        <Divider color="primary" />
        <Card.Body css={{ py: "$10" }}>
          <Text
            h2
            css={{
              textAlign: "center",
            }}
          >
            John Doe
          </Text>
        </Card.Body>
        <Divider color="primary" />
        <Card.Footer>
          <Row justify="center">
            <Button flat color="secondary" size="sm">
              <Popover size="small" />
            </Button>
          </Row>
        </Card.Footer>
      </Card>
      <Spacer y={0.5} />
      <Card hoverable>
        <Card.Header>
          <Text color="secondary">Note moyenne 8/10</Text>
        </Card.Header>
        <Divider color="primary" />
        <Card.Body css={{ py: "$10" }}>
          <Text
            h2
            css={{
              textAlign: "center",
            }}
          >
            John Doe
          </Text>
        </Card.Body>
        <Divider color="primary" />
        <Card.Footer>
          <Row justify="center">
            <Button flat color="secondary" size="sm">
              <Popover size="small" />
            </Button>
          </Row>
        </Card.Footer>
      </Card>
      <Spacer y={0.5} />
      {selectCityInfoWindows && (
        <Button
          bordered
          style={{ margin: "0 auto" }}
          color="gradient"
          onClick={() => nextStep(1)}
        >
          Noter la ville
        </Button>
      )}
    </Container>
  );
}
