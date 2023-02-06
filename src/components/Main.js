import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import edit_avatar from '../images/edit_avatar.svg';
import Card from './Card';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([profile, cards])=>{ //попадаем сюда когда оба промиса будут выполнены
      setUserName(profile.name)
      setUserDescription(profile.about)
      setUserAvatar(profile.avatar)
      setCards(cards)
    })
    .catch((err)=>{ //попадаем сюда если один из промисов завершаться ошибкой
      console.log(err);
    })
  }, []);

  return (
    <main className="main page__main">
      <section className="profile page__profile">
            
        <div className="profile__data">
          <div className="profile__avatar-place">
            <button onClick={onEditAvatar} className="profile__avatar-btn" aria-label="Изменить">
              <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
              <img className="profile__hover" src={edit_avatar}></img>
            </button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} className="profile__edit-button button" aria-label="Изменить" type="button"></button>
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>

        <button onClick={onAddPlace} className="profile__add-button button" aria-label="Добавить" type="button"></button>
      </section>
      
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick}/> /*пропсы, не забыть key, чтобы отличать карточки друг от друга*/
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main