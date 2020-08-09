import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { StyledOutlinedButton, StyledSolidButton } from '../components/common'
import DefaultLayout from '../components/layouts/DefaultLayout'
import WelcomeCarousel from '../components/welcome/WelcomeCarousel'

const StyledBtnsDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`

const slides = [
  {
    image: 'https://i.imgur.com/j4HZsCG.png',
    title: '文化棲地-落實文化平權',
    caption: '在每一個人心中，建一座美術館',
  },
]

const WelcomePage: React.FC = () => {
  const history = useHistory()

  return (
    <DefaultLayout>
      <WelcomeCarousel slides={slides} />

      <StyledBtnsDiv>
        <StyledOutlinedButton onClick={() => history.push('/auth')}>一般民眾</StyledOutlinedButton>
        <StyledSolidButton onClick={() => history.push('/auth')}>視障朋友</StyledSolidButton>
      </StyledBtnsDiv>
    </DefaultLayout>
  )
}

export default WelcomePage
