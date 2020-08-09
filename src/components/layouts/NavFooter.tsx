import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import CollectionImg from '../../assets/images/collection.png'
import CurationImg from '../../assets/images/curation.png'
import HomeImg from '../../assets/images/home.png'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`
const StyledImg = styled.img`
  display: block;
  height: 50px;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 45px;
`
const StyledLink = styled(Link)<{ active?: boolean }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.16em;
  text-indent: 0.32em;
  display: block;

  ${props => (props.active ? 'color: #000; background: #F3F3F3;' : 'color: #5F5F5F; background: #fff;')}

  padding-bottom: 10px;
  padding-top: 40px;
`

type FooterProps = {
  activeKey?: string
}

const NavFooter: React.FC<FooterProps> = ({ activeKey }) => {
  return (
    <StyledFooter>
      <Row>
        <Col span={8}>
          <StyledLink to="/curation" active={activeKey === 'curation'}>
            <StyledImg src={CurationImg} />
            <div>策展</div>
          </StyledLink>
        </Col>
        <Col span={8}>
          <StyledLink to="/home" active={activeKey === 'home'}>
            <StyledImg src={HomeImg} />
            <div>首頁</div>
          </StyledLink>
        </Col>
        <Col span={8}>
          <StyledLink to="/collection" active={activeKey === 'collection'}>
            <StyledImg src={CollectionImg} />
            <div>收藏</div>
          </StyledLink>
        </Col>
      </Row>
    </StyledFooter>
  )
}

export default NavFooter
