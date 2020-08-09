import { Form } from 'antd'
import React from 'react'
import { StyledFrom, StyledInput, StyleFormItem } from '../common'

const LoginForm: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <StyledFrom layout="vertical" form={form}>
      <StyleFormItem label="帳號" name="username">
        <StyledInput />
      </StyleFormItem>
      <StyleFormItem label="密碼" name="password">
        <StyledInput type="password" />
      </StyleFormItem>
    </StyledFrom>
  )
}

export default LoginForm
