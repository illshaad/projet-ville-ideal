import { Container, Typography } from '@mui/material'
import React from 'react'
import {
  Button, CardRating, FlexElementCard, P, FlexContainerHome
} from '../../../styles/global'
import Popover from '../../popover/Popover'
import { useDataCity } from '../../../context/context'

export default function ViewAllRating ({ nextStep }) {
  const { selectCityInfoWindows } = useDataCity()
  return (
    <Container>
      <br />
      <FlexElementCard>
        <P fontSize='15px' style={{ fontWeight: 'bold' }}>{selectCityInfoWindows?.nom}</P>
        <P fontSize='15px' style={{ fontWeight: 'bold' }}>{selectCityInfoWindows?.departement.nom}</P>
      </FlexElementCard>
      <CardRating>
        <P textAlign='left' fontSize='13px' style={{ fontWeight: 'bold', paddingLeft: '20px' }}>Note moyenne 8/10</P>
        <FlexElementCard>
          <Typography variant='subtitle1'>John Doe</Typography>
          <Popover size='small' />
        </FlexElementCard>
      </CardRating>
      <CardRating>
        <P textAlign='left' fontSize='13px' style={{ fontWeight: 'bold', paddingLeft: '20px' }}>Note moyenne 8/10</P>
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
