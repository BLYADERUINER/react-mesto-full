import Card from "./Card.jsx";

function Main({
  userName,
  userDescription,
  userAvatar,
  cardsData,
  onCardClick,
  onCardLike,
  onCardDelete,
  handleEditAvatarCLick,
  handleEditProfileClick,
  handleAddPlaceClick
}) {
  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__container-avatar">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}}></div>
          <button
            className="profile__avatar-button-edit"
            onClick={handleEditAvatarCLick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="button profile__button-edit"
              type="button"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button
          className="button profile__button-add"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements content__elements">
        {
            cardsData?.map((card) =>
              <Card
                key={card._id}
                cardData={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            )
        }
      </section>
    </main>
  );
}

export default Main;
