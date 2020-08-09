import { Tabs } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import LoginForm from '../components/auth/LoginForm'
import SignupForm from '../components/auth/SignupForm'
import { StyledBtnsDiv, StyledOutlinedButton, StyledSolidButton, StyledTab } from '../components/common'
import DefaultLayout from '../components/layouts/DefaultLayout'

const StyledDiv = styled.div`
  height: calc(80vh - 100px);
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LoginPage: React.FC = () => {
  const history = useHistory()

  return (
    <DefaultLayout>
      <StyledTab defaultActiveKey="login" centered>
        <Tabs.TabPane tab="登入" key="login">
          <StyledDiv>
            <LoginForm />
          </StyledDiv>
          <StyledBtnsDiv>
            <StyledOutlinedButton onClick={() => history.push('/')}>取消</StyledOutlinedButton>
            <StyledSolidButton onClick={() => history.push('/home')}>登入</StyledSolidButton>
          </StyledBtnsDiv>
        </Tabs.TabPane>

        <Tabs.TabPane tab="註冊" key="signup">
          <StyledDiv>
            <SignupForm />
          </StyledDiv>
          <StyledBtnsDiv>
            <StyledOutlinedButton onClick={() => history.push('/')}>取消</StyledOutlinedButton>
            <StyledSolidButton onClick={() => history.push('/home')}>註冊</StyledSolidButton>
          </StyledBtnsDiv>
        </Tabs.TabPane>
      </StyledTab>
    </DefaultLayout>
  )
}

export default LoginPage
