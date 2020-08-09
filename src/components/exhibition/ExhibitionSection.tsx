import { Modal, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import SuccessImg from '../../assets/images/success.png'
import { useAuth } from '../../contexts/AuthContext'
import { StyledTab } from '../common'
import ExhibitionCarousel from '../exhibition/ExhibitionCarousel'
import ExhibitionComment from '../exhibition/ExhibitionComment'
import { ExhibitionListProps } from '../exhibition/ExhibitionListItem'
import ExhibitionTitle from '../exhibition/ExhibitionTitle'

const StyledExhibitionTab = styled(StyledTab)`
  margin-top: 0;
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab-btn {
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    color: #1e5285;
  }
`

const StyledExhibitionContent = styled.div`
  width: 70%;
  margin: 20px auto;
`
const StyledExhibitionContentPre = styled(StyledExhibitionContent)`
  white-space: pre-wrap;
`

const StyledCommentContainerDiv = styled.div`
  width: 70%;
  margin: 20px auto;
`

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border: 4px solid #ffb53c;
    text-align: center;
  }
  .ant-modal-footer {
    display: none;
  }
`
const StyledModalImg = styled.img`
  width: 70px;
`
const StyledModalTitle = styled.h1`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2em;

  color: #1e5285;
  margin-top: 15px;
  margin-bottom: 0;
`

const ExhibitionSection: React.FC<ExhibitionListProps & { hasSaved?: any }> = ({
  id,
  title,
  name,
  saved,
  imageUrls,
  date,
  material,
  sizing,
  content,
  comments,
  audioUrl,
  author,
  hasSaved,
}) => {
  const history = useHistory()

  const [currentComments, setCurrentComments] = useState(comments)
  const { currentMember } = useAuth()

  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (hasSaved) {
      setModalVisible(true)
      setTimeout(() => {
        setModalVisible(false)
      }, 2000)
    }
  }, [hasSaved])

  const appendNewComment = (commentText: string) => {
    setCurrentComments(
      comments?.concat([
        {
          author: {
            name: currentMember?.name || '',
            avatarUrl: currentMember?.avatarUrl || 'https://image.flaticon.com/icons/svg/848/848006.svg',
          },
          content: commentText,
        },
      ]),
    )
  }

  return (
    <>
      <ExhibitionTitle
        title={title}
        saved={hasSaved || saved}
        audioUrl={audioUrl}
        onCollect={() => history.push('/exhibition-collect', { prevPath: `/exhibition/${id}` })}
      />
      <ExhibitionCarousel imageUrls={imageUrls} />

      <StyledExhibitionTab defaultActiveKey="introduce">
        <Tabs.TabPane tab="介紹" key="introduce">
          <StyledExhibitionContent>
            {author && <div>作者：{author.name}</div>}
            {name && <div>作品名稱：{name}</div>}
            {date && <div>年代：{date}</div>}
            {material && <div>媒材：{material}</div>}
            {sizing && <div>尺寸：{sizing}</div>}
          </StyledExhibitionContent>
          <StyledExhibitionContentPre>{content}</StyledExhibitionContentPre>
        </Tabs.TabPane>

        <Tabs.TabPane tab="評論" key="comment">
          <StyledCommentContainerDiv>
            <ExhibitionComment comments={currentComments} onSaveComment={appendNewComment} />
          </StyledCommentContainerDiv>
        </Tabs.TabPane>
      </StyledExhibitionTab>

      <StyledModal visible={modalVisible} onCancel={() => setModalVisible(false)}>
        <StyledModalImg src={SuccessImg} alt="儲存成功" />
        <StyledModalTitle>已加入收藏</StyledModalTitle>
      </StyledModal>
    </>
  )
}

export default ExhibitionSection
