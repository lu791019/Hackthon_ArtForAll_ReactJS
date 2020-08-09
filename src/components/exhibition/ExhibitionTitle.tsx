import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SavedOutlinedImg } from '../../assets/images/SavedOutlined.svg'
import { ReactComponent as SavedSolidImg } from '../../assets/images/SavedSolid.svg'
import VoiceImg from '../../assets/images/voice.png'
import AudioPlayer from '../common/AudioPlayer'
import { StyledTitleDiv, StyledTitleSpan } from './ExhibitionListItem'

export type ExhibitionTitleProps = {
  title: string
  saved: boolean
  audioUrl?: string
  onCollect?: () => void
}

const StyledVoiceDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  img {
    width: 20px;
  }
`

const ExhibitionTitle: React.FC<ExhibitionTitleProps> = ({ title, saved, audioUrl = null, onCollect }) => {
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null)

  return (
    <>
      <AudioPlayer audioUrl={currentAudioUrl} />
      <StyledTitleDiv>
        {saved ? (
          <SavedSolidImg className="vertical-align-middle" onClick={onCollect} />
        ) : (
          <SavedOutlinedImg className="vertical-align-middle" onClick={onCollect} />
        )}
        <StyledTitleSpan>{title}</StyledTitleSpan>

        <StyledVoiceDiv onClick={() => setCurrentAudioUrl(audioUrl)}>
          <img src={VoiceImg} alt="唸給你聽" />
        </StyledVoiceDiv>
      </StyledTitleDiv>
    </>
  )
}

export default ExhibitionTitle
