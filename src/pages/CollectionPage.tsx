import React from 'react'
import { useHistory } from 'react-router-dom'
import CollectionList from '../components/collection/CollectionList'
import MainLayout from '../components/layouts/MainLayout'

const CollectionPage: React.FC = () => {
  const history = useHistory()
  return (
    <MainLayout title="收藏" activeKey="collection">
      <CollectionList onSelectItem={id => history.push(`/collection/${id}`)} />
    </MainLayout>
  )
}

export default CollectionPage
