import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SavedOutlinedImg } from '../../assets/images/SavedOutlined.svg'
import { ReactComponent as SavedSolidImg } from '../../assets/images/SavedSolid.svg'

export type ExhibitionListProps = {
  id: string
  title: string
  name?: string
  saved: boolean
  featureImageUrl: string
  audioUrl?: string
  margin?: boolean
  imageUrls?: string[]
  content?: string
  author?: {
    name: string
  }
  date?: string
  sizing?: string
  material?: string
  comments?: {
    author: {
      name: string
      avatarUrl: string
    }
    content: string
  }[]
}

const StyledLink = styled(Link)``

export const StyledTitleDiv = styled.div<{ margin?: boolean }>`
  ${props => props.margin && 'margin-top: 25px;'}
  padding: 5px 10px;
  position: relative;
`
export const StyledTitleSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1em;
  vertical-align: middle;

  color: #000000;

  margin-left: 10px;
`
const StyledImageBg = styled.div<{ bgUrl: string; margin: boolean }>`
  width: 100%;
  height: 200px;

  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bgUrl});

  ${props => props.margin && 'margin-bottom: 10px;'}
`

const ExhibitionListItem: React.FC<ExhibitionListProps> = ({ id, title, saved, featureImageUrl, margin = false }) => {
  return (
    <StyledLink to={`/exhibition/${id}`}>
      <StyledTitleDiv margin={margin}>
        {saved ? (
          <SavedSolidImg className="vertical-align-middle" />
        ) : (
          <SavedOutlinedImg className="vertical-align-middle" />
        )}
        <StyledTitleSpan>{title}</StyledTitleSpan>
      </StyledTitleDiv>

      <StyledImageBg bgUrl={featureImageUrl} margin={margin} />
    </StyledLink>
  )
}

export default ExhibitionListItem
