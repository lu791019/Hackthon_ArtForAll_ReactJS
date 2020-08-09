import React from 'react'
import styled from 'styled-components'
import AudioPlayer from '../components/common/AudioPlayer'
import ExhibitionListItem, { ExhibitionListProps } from '../components/exhibition/ExhibitionListItem'
import MainLayout from '../components/layouts/MainLayout'

const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.08em;

  color: #1e5285;
`

const collectionItem = {
  id: '01',
  name: '淡水風景',
}

const exhibitionList: ExhibitionListProps[] = [
  {
    id: '001',
    title: '1+塑X3－朝倉與蒲添生三代雕塑展',
    saved: true,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/exhibition01.jpeg',
  },
  {
    id: '002',
    title: '陳澄波 淡水風景（淡水）',
    saved: true,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/02.jpg',
  },
  {
    id: '003',
    title: '張永村 文明的躍昇',
    saved: true,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/03.jpg',
  },
  {
    id: '004',
    title: '夏陽 人',
    saved: true,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/04.PNG',
  },
]

const CollectionDetailPage: React.FC = () => {
  return (
    <MainLayout title="收藏" activeKey="collection" expanded>
      <StyledTitle>{collectionItem.name}</StyledTitle>

      <AudioPlayer audioUrl={''} isShow={true} />

      {exhibitionList.map(exhibitionListItem => (
        <ExhibitionListItem {...exhibitionListItem} />
      ))}
    </MainLayout>
  )
}

export default CollectionDetailPage
