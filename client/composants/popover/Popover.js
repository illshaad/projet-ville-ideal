import React, { useState } from "react";
import PopoverMui from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FlexContainer, Card, ContainerInformation } from "../../styles/global";

export default function Popover({ size }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        aria-describedby={open && "simple-popover"}
        onClick={handleClick}
        color="inherit"
        size={size}
      >
        les avis
      </Button>
      <PopoverMui
        id={open && "simple-popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
        }}
      >
        <FlexContainer>
          <div>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Environement: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Transports: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Securité: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Santé: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Sport et Loisir: 5 /10
              </Typography>
            </ContainerInformation>
          </div>
          <div>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Culture: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Enseignement: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Commerce: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Qualité de Vie: 5 /10
              </Typography>
            </ContainerInformation>
            <ContainerInformation>
              <Typography sx={{ p: 1 }} align="center">
                Note Global: 4 /10
              </Typography>
            </ContainerInformation>
          </div>
        </FlexContainer>

        <FlexContainer>
          <Card overflow="scroll">
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ p: 1 }}
              align="center"
              variant="h6"
            >
              Avis positifs
            </Typography>
            <Typography>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Typography>
          </Card>
          <Card overflow="scroll">
            <Typography
              style={{ fontWeight: 600 }}
              sx={{ p: 1 }}
              align="center"
              variant="h6"
            >
              Avis negatif
            </Typography>
            <Typography>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Typography>
          </Card>
        </FlexContainer>
        <Button size="small" color="success">
          Accepter
        </Button>
        <Button size="small" color="error">
          Refuser
        </Button>
      </PopoverMui>
    </div>
  );
}
