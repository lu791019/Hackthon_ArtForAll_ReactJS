import React, { useState } from 'react'
import styled from 'styled-components'
import DefaultLayout from './DefaultLayout'
import Header from './Header'
import NavFooter from './NavFooter'

type LayoutProps = {
  title?: string
  activeKey?: string
  expanded?: boolean
}
const StyledContentDiv = styled.div`
  margin-top: 80px;
  margin-bottom: 100px;
`

const MainLayout: React.FC<LayoutProps> = ({ children, title = '', activeKey, expanded = false }) => {
  const [collapse, setCollapse] = useState(true)
  return (
    <DefaultLayout collapsed={collapse}>
      <Header title={title} onMenuClick={() => setCollapse(!collapse)} expanded={expanded} />
      <StyledContentDiv>{children}</StyledContentDiv>
      {!expanded && <NavFooter activeKey={activeKey} />}
    </DefaultLayout>
  )
}

export default MainLayout
