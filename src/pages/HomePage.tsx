import React from 'react'
import SearchInput from '../components/common/SearchInput'
import ExhibitionListItem, { ExhibitionListProps } from '../components/exhibition/ExhibitionListItem'
import MainLayout from '../components/layouts/MainLayout'

const exhibitionList: ExhibitionListProps[] = [
  {
    id: '001',
    title: '1+塑X3－朝倉與蒲添生三代雕塑展',
    saved: false,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/exhibition01.jpeg',
  },
  {
    id: '002',
    title: '陳澄波 淡水風景（淡水）',
    saved: false,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/02.jpg',
  },
  {
    id: '003',
    title: '張永村 文明的躍昇',
    saved: false,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/03.jpg',
  },
  {
    id: '004',
    title: '夏陽 人',
    saved: false,
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/04.PNG',
  },
]

const HomePage: React.FC = () => {
  return (
    <MainLayout title="首頁" activeKey="home">
      <SearchInput />

      {exhibitionList.map(exhibitionListItem => (
        <ExhibitionListItem {...exhibitionListItem} margin />
      ))}
    </MainLayout>
  )
}

export default HomePage
