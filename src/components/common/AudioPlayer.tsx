import React from 'react'
import styled from 'styled-components'
import PlayerImg from '../../assets/images/player.png'

export type ExhibitionTitleProps = {
  audioUrl: string | null
  isPlaying?: boolean
  isShow?: boolean
}

const StyledPlayerImg = styled.img`
  width: 80%;
  margin: 5px 10% 10px 10%;
  text-align: center;
`

const AudioPlayer: React.FC<ExhibitionTitleProps> = ({ audioUrl, isPlaying = false, isShow = false }) => {
  return <>{(audioUrl || isShow) && <StyledPlayerImg src={PlayerImg} />}</>
}

export default AudioPlayer
