import { ZoomInOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledCarousel, StyledCarouselImage } from '../welcome/WelcomeCarousel'

const StyledExhibitionCarousel = styled(StyledCarousel)`
  .slick-dots {
    margin-top: 25px;
    position: relative;
  }
`

const StyledRelativeDiv = styled.div`
  position: relative;
`
const StyledZoomIcon = styled(ZoomInOutlined)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
`

const StyledModalImage = styled.img`
  width: 100%;
`
const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 20px 10px;
  }
  .ant-modal-footer {
    display: none;
  }
`

const ExhibitionCarousel: React.FC<{ imageUrls?: string[] }> = ({ imageUrls }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const showModal = (imageUrl: string) => {
    setModalVisible(true)
    setModalImage(imageUrl)
  }

  return (
    <>
      <StyledExhibitionCarousel>
        {imageUrls?.map(imageUrl => (
          <StyledRelativeDiv onClick={() => showModal(imageUrl)}>
            <StyledCarouselImage src={imageUrl} />

            <StyledZoomIcon />
          </StyledRelativeDiv>
        ))}
      </StyledExhibitionCarousel>

      <StyledModal
        closable={false}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <StyledModalImage src={modalImage} />
      </StyledModal>
    </>
  )
}

export default ExhibitionCarousel
