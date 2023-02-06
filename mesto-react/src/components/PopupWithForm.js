function PopupWithForm({ title, name, isOpen, children, onClose, buttonText }) {
  return ({ isOpen } && (//элемент всегда = true, так что отрисовываем его, когда isOpen тоже 
    <div className={ isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}` }>
      <div className="popup__content">
        <button onClick={onClose} className="popup__close button" aria-label="Закрыть" type="button"></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={`${name}`}>
          {children}
          <button className="popup__submit-btn" type="submit">{buttonText}</button>
        </form>
      </div>
  </div>
  ))
}

export default PopupWithForm