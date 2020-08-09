import { Button, Form, Input, Tabs } from 'antd'
import styled from 'styled-components'

export const StyledOutlinedButton = styled(Button)`
  width: 152.39px;
  height: 54px;
  border: 2px solid #ffb53c;
  font-size: 16px;
  letter-spacing: 0.16em;
  border-radius: 0;

  &:hover,
  &:focus {
    border: 2px solid #ffb53c;
    background: #ffb53c;
    color: #fff;
  }
`
export const StyledSolidButton = styled(Button)`
  width: 152.39px;
  height: 54px;
  border: 2px solid #ffb53c;
  background: #ffb53c;
  font-size: 16px;
  letter-spacing: 0.16em;
  border-radius: 0;

  &:hover,
  &:focus {
    border: 2px solid #ffb53c;
    background: #fff;
    color: #000;
  }
`

export const StyledFrom = styled(Form)`
  width: 80%;
  margin: 0 auto;
`

export const StyleFormItem = styled(Form.Item)`
  padding-top: 20px;
  padding-bottom: 20px;
  label {
    margin-left: 20px !important;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.16em;
  }
`

export const StyledInput = styled(Input)`
  height: 50px;
  border-radius: 25px;
  border: 2px solid #ffb53c;

  &:hover {
    border: 2px solid #ffb53c;
  }
`

export const StyledBtnsDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
`

export const StyledTab = styled(Tabs)`
  margin-top: 30px;

  .ant-tabs-nav {
    width: 80%;
    margin: 0 auto;
  }
  .ant-tabs-nav::before {
    border-bottom: 4px solid rgba(255, 181, 60, 0.5);
  }
  .ant-tabs-nav-list {
    width: 100%;
  }
  .ant-tabs-tab {
    width: 100%;
    margin: 0;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab-btn {
    width: 100%;

    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.16em;

    color: #000000;
  }
  .ant-tabs-ink-bar {
    height: 4px !important;
    background: #ffb53c;
    border-radius: 2px;
  }
`
