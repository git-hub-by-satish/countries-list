import {ListItem, CustomButton} from '../StyledComponents'

const CountryItem = props => {
  const {updateVisited, eachItem} = props
  const onClickBtn = () => {
    updateVisited(eachItem.id)
  }

  return (
    <ListItem>
      <p>{eachItem.name}</p>
      {eachItem.isVisited ? (
        <p>Visited</p>
      ) : (
        <CustomButton isVisited={eachItem.isVisited} onClick={onClickBtn}>
          Visit
        </CustomButton>
      )}
    </ListItem>
  )
}

export default CountryItem
