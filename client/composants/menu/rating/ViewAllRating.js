import { Container, Typography } from '@mui/material'
import React from 'react'
import {
  Button, CardRating, FlexElementCard, P
} from '../../../styles/global'
import Popover from '../../popover/Popover'

export default function ViewAllRating ({ nextStep }) {
  return (
    <Container>
      <CardRating>
        <P textAlign='left' fontSize='13px' style={{ fontWeight: 'bold' }}>Note moyenne 8/10</P>
        <FlexElementCard>
          <Typography variant='subtitle1'>John Doe</Typography>
          <Popover size='small' />
        </FlexElementCard>
      </CardRating>
      <CardRating>
        <P textAlign='left' fontSize='13px' style={{ fontWeight: 'bold' }}>Note moyenne 8/10</P>
        <FlexElementCard>
          <Typography variant='subtitle1'>John Doe</Typography>
          <Popover size='small' />
        </FlexElementCard>
      </CardRating>
      <Button cursor='pointer' onClick={() => nextStep(1)}>
        Noter la ville
      </Button>
    </Container>
  )
}
