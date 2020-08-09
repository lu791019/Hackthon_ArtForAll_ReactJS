import React from 'react'
import { useLocation } from 'react-router-dom'
import { ExhibitionListProps } from '../components/exhibition/ExhibitionListItem'
import ExhibitionSection from '../components/exhibition/ExhibitionSection'
import MainLayout from '../components/layouts/MainLayout'

const exhibitionListItem: ExhibitionListProps = {
  id: '001',
  title: '陳澄波 淡水風景（淡水）',
  name: '淡水風景（淡水）',
  saved: false,
  featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/02.jpg',
  imageUrls: [
    'https://art-for-all.s3.amazonaws.com/images/02.jpg',
    'https://art-for-all.s3.amazonaws.com/images/02.jpg',
  ],
  audioUrl: 'https://art-for-all.s3.amazonaws.com/voices/01.mp3',
  author: {
    name: '陳澄波',
  },
  date: '1935',
  material: '油彩、畫布',
  sizing: '91.0 x 117.0 cm',
  comments: [
    {
      author: {
        name: '評論家',
        avatarUrl: 'https://image.flaticon.com/icons/svg/848/848006.svg',
      },
      content: `一開始映入眼簾的是黃華成以國畫、印象派等純藝術等作品，從這個作品開始之後跳脫了原本藝術的框架。
以展中展的形式呈現黃華成的創作過程，從發想過程到後續自己撤出的展。欣賞黃華成的展，好像認識了設計師本人，在展覽的最後以一段長篇的影片敘述他前面作品的創新，不被過去框架影響`,
    },
  ],
  content: `此作1935 年的《淡水風景》（淡水），是陳澄波淡水系列作品中最具代表性的件品，全圖以俯視遠望的視角，描繪淡水城繁華的景貌，深具表現性的構圖，以繁密紅磚建築與曲折巷道為主景，隱藏著一種有機的秩序和紛雜中的穩定。房屋順著山形水勢而上，形成一個整體，而位於畫幅中央的一支煙囪，顯然正是全幅轉折的中心點，山路由此轉向後方，隱隱與右後方的淡水河相接。屋舍的土洋雜陳、色彩的紅綠並置，構圖上的山水並陳，在在形成對比的和諧，似乎也正顯現出臺灣文化特色的象徵。
陳澄波不僅是臺灣傑出的油畫家，同時也是在臺灣美術史上堅持反映生活現實、執著表現臺灣風土之美的重要前輩畫家，他的生命歷程見證了臺灣歷史的變遷和異動，歷史的悲壯烙印，對臺灣美術史更具特殊意義。`,
}

const ExhibitionPage: React.FC = () => {
  const location = useLocation()
  const hasSaved = (location.state as any)?.saved

  return (
    <MainLayout title="首頁" activeKey="home">
      <ExhibitionSection {...exhibitionListItem} hasSaved={hasSaved} />
    </MainLayout>
  )
}

export default ExhibitionPage
