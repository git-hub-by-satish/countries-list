import './index.css'

const VisitedCountryDetails = props => {
  const {eachItem, updateVisited} = props
  const onClickRemove = () => {
    updateVisited(eachItem.id)
  }

  return (
    <li className="list-item">
      <img className="img" src={eachItem.imageUrl} alt="thumbnail" />
      <div className="country-details">
        <p className="visited-country-name">{eachItem.name}</p>
        <button onClick={onClickRemove} className="remove-btn" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryDetails
