import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import CollectionDetailPage from './pages/CollectionDetailPage'
import CollectionPage from './pages/CollectionPage'
import CurationPage from './pages/CurationPage'
import CurationWorkPage from './pages/CurationWorkPage'
import ExhibitionCollectPage from './pages/ExhibitionCollectPage'
import ExhibitionPage from './pages/ExhibitionPage'
import HomePage from './pages/HomePage'
import LoadingPage from './pages/LoadingPage'
import NavigationPage from './pages/NavigationPage'
import WelcomePage from './pages/WelcomePage'

export default () => (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/curation" component={CurationPage} />
      <Route exact path="/curation/:curationId" component={CurationWorkPage} />
      <Route exact path="/collection" component={CollectionPage} />
      <Route exact path="/collection/:collectionId" component={CollectionDetailPage} />
      <Route exact path="/exhibition/:exhibitionId" component={ExhibitionPage} />
      <Route exact path="/exhibition-collect" component={ExhibitionCollectPage} />
      <Route exact path="/navigation" component={NavigationPage} />
    </Switch>
  </Suspense>
)
