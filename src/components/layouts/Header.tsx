import { DownOutlined, LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledMenuBtn = styled.div<{ expanded: boolean }>`
  width: 40px;
  height: 40px;

  background: ${props => (props.expanded ? '#FFA3AB' : '#ffb53c')};
  border: 2px solid ${props => (props.expanded ? '#FFA3AB' : '#ffb53c')};
  box-sizing: border-box;
  border-radius: 10px;

  color: #fff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`
const StyledMenuRightBtn = styled.div`
  width: 40px;
  height: 40px;

  color: #ffb53c;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;

  float: right;
  cursor: pointer;
`

const StyledRow = styled(Row)`
  padding: 20px;
`

const StyledTitleCol = styled(Col)`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.16em;

  color: #1e5285;

  padding: 2px 0;
`

type HeaderProps = {
  title: string
  onMenuClick?: () => void
  expanded?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick, expanded = false }) => {
  const history = useHistory()

  return (
    <header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
      <StyledRow>
        <Col span={4}>
          <StyledMenuBtn expanded={expanded} onClick={() => history.goBack()}>
            {expanded ? <DownOutlined /> : <LeftOutlined />}
          </StyledMenuBtn>
        </Col>
        <StyledTitleCol span={16}>{title}</StyledTitleCol>
        <Col span={4}>
          <StyledMenuRightBtn onClick={onMenuClick}>
            <MenuOutlined />
          </StyledMenuRightBtn>
        </Col>
      </StyledRow>
    </header>
  )
}

export default Header
