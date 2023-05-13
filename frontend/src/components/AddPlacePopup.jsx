import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  // реакт стейты имя и ссылка карточки
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  React.useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  // получаем в стейты значения инпутов
  function handleChangeOnCardName(event) {
    setCardName(event.target.value);
  }

  function handleChangeOnCardLink(event) {
    setCardLink(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    // отправляем полученые данные из стейтов
    onAddPlace({
      name: cardName,
      link: cardLink
    })
  }

  return (
    <PopupWithForm
      popupName="add-card"
      popupTitle="Новое место"
      popupTextButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleOnSubmit}
    >
      <input
        className="pop-up__input pop-up__input_card-name"
        name="cardName"
        id="input-cardName"
        placeholder="Название"
        type="text"
        minLength="2"
        maxLength="30"
        onChange={handleChangeOnCardName}
        value={cardName || ''}
        required
      />
      <span className="pop-up__error" id="input-cardName-error"></span>
      <input
        className="pop-up__input pop-up__input_card-link"
        name="cardLink"
        id="input-cardLink"
        placeholder="Ссылка на картинку"
        type="url"
        onChange={handleChangeOnCardLink}
        value={cardLink || ''}
        required
      />
      <span className="pop-up__error" id="input-cardLink-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
