function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
} 
  
  return (
    <li className="element">
      <button className="element__delete button" aria-label="Удалить" type="button"></button>
      <img onClick={handleClick} src={card.link} className="element__image" alt={card.name} />
      <div className="element__info">
        <h2 className="element__place">{card.name}</h2>
        <div className="element__likes">
          <button className="element__like" aria-label="Нравится" type="button"></button>
          <span className="element__likes-number">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )

}

export default Card