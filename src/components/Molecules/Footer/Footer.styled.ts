import styled from 'styled-components'
import { Colors } from '../../../styles/Colors'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
  background-color: ${Colors.backgroundColor};
`

export const StyledFooterIconLink = styled.a`
  color: ${Colors.white}; /* 아이콘 색상 */
  text-decoration: none;
  font-size: 50px;
  margin-top: 10px; /* 아이콘 위에 여백 추가 */
  transition: color 0.3s;

  &:hover {
    color: ${Colors.primary}; /* 마우스를 올렸을 때 색상 변경 */
  }
`
