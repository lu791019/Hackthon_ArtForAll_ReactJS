import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import CollectionList from '../components/collection/CollectionList'
import MainLayout from '../components/layouts/MainLayout'

const ExhibitionCollectionPage: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const onCollect = (id: string) => {
    const nextPath = (location.state as any).prevPath ? (location.state as any).prevPath : `/collection/${id}`
    history.push(nextPath, { saved: true })
  }

  return (
    <MainLayout title="收藏" activeKey="collection">
      <CollectionList onSelectItem={id => onCollect(id)} />
    </MainLayout>
  )
}

export default ExhibitionCollectionPage
