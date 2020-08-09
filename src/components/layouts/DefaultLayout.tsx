import { Layout, Menu } from 'antd'
import React from 'react'
import MediaQuery from 'react-responsive'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  background: #fff;
  position: relative;
`
const StyledDesktopLayout = styled(StyledLayout)`
  max-width: 500px;
  margin: 0 auto;
  footer,
  header {
    max-width: 500px;
  }
`
const StyledMobileLayout = styled(StyledLayout)``

const StyledSider = styled(Layout.Sider)`
  height: 100vh;
  background: #1f507f;

  .ant-menu.ant-menu-dark {
    background: #1f507f;
  }
  .ant-layout-sider-zero-width-trigger {
    display: none;
  }
`
const StyledMenuItem = styled(Menu.Item)`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #fff !important;

  padding-top: 35px !important;
  padding-bottom: 35px !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  border-bottom: 1px solid #fff;
  height: auto !important;
`

type LayoutProps = {
  collapsed?: boolean
}

const LayoutContainer: React.FC<LayoutProps> = ({ children, collapsed }) => {
  const history = useHistory()

  return (
    <>
      <StyledLayout>{children}</StyledLayout>
      <StyledSider collapsible collapsedWidth={0} width={150} collapsed={collapsed}>
        <Menu theme="dark" mode="inline">
          <StyledMenuItem key="guide" onClick={() => history.push('/navigation')}>
            網站導覽
          </StyledMenuItem>
          <StyledMenuItem key="faq">FAQ</StyledMenuItem>
          <StyledMenuItem key="logout" onClick={() => history.push('/')}>
            登出
          </StyledMenuItem>
        </Menu>
      </StyledSider>
    </>
  )
}

const DefaultLayout: React.FC<LayoutProps> = ({ children, collapsed = true }) => {
  return (
    <>
      <MediaQuery query="(min-device-width: 768px)">
        <StyledDesktopLayout>
          <LayoutContainer collapsed={collapsed}>{children}</LayoutContainer>
        </StyledDesktopLayout>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 767px)">
        <StyledMobileLayout>
          <LayoutContainer collapsed={collapsed}>{children}</LayoutContainer>
        </StyledMobileLayout>
      </MediaQuery>
    </>
  )
}

export default DefaultLayout
