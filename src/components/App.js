import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  const [isAddPlacePopupOpened, setAddPlacePopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
// Открываем попапы
  function handleEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpened(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

//Закрываем попапы

  function closeAllPopups() {
    setIsEditProfilePopupOpened(false);
    setIsEditAvatarPopupOpened(false);
    setAddPlacePopupOpened(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick} // по факту здесь происходит вызов Main(onEditProfile)...
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpened}
        children={<>
          <input className="popup__input popup__input_type_name" id="input-name" name="name" type="text" required minLength="2" maxLength="40" />
          <span className="popup__error input-name-error"></span>
          <input className="popup__input popup__input_type_occupation" id="input-occupation" name="about" type="text" required minLength="2" maxLength="200" />
          <span className="popup__error input-occupation-error"></span>
        </>}
        onClose={closeAllPopups} buttonText="Сохранить" />
      
      <PopupWithForm title="Новое место" name="entry" isOpen={isAddPlacePopupOpened}
        children={<>
          <input className="popup__input popup__input_type_place" id="input-place" name="place" placeholder="Название" type="text" required minLength="2" maxLength="30" />
          <span className="popup__error input-place-error"></span>
          <input className="popup__input popup__input_type_link" id="input-link" name="link" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__error input-link-error"></span>
        </>}
        onClose={closeAllPopups} buttonText="Создать" />
      
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpened}
        children={<>
          <input className="popup__input popup__input_type_link" id="avatar-link" name="link" placeholder="Ссылка на картинку"
            type="url" required />
          <span className="popup__error avatar-link-error"></span>
        </>}
        onClose={closeAllPopups} buttonText="Сохранить" />
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
      
  );
}

export default App;
