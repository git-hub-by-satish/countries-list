import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: transparent;
  border-bottom: 2px solid #334155;
  color: #ffffff;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CustomButton = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  font-size: 18px;
  color: ${props => (props.isVisited ? '#94a3b8' : '#ffffff')};
  background-color: ${props => (props.isVisited ? 'transparent' : '#3b82f6')};
  border-radius: 4px;
`
