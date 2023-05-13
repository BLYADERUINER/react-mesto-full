import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import { CurrentUserContext } from "../context/CurrentUserContext.jsx";

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
  // реакт стейты имя и описание юзера
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // юзаем хук контекса и получаем информацию о пользователе
  const currentUser = React.useContext(CurrentUserContext);

  // используя хук эффекта обновляя стейты, после полученного контекста
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeOnName(event) {
    setName(event.target.value);
  }

  function handleChangeOnDescription(event) {
    setDescription(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    // отправляем полученные стейты
    onUpdateUser({
      name: name,
      about: description
    });
  }

    return(
      <PopupWithForm
      popupName="edit-profile"
      popupTitle="Редактировать профиль"
      popupTextButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleOnSubmit}
      >
        <input
          className="pop-up__input pop-up__input_edit-userName"
          name="userName"
          id="input-userName"
          placeholder="Иван Иванов"
          type="text"
          minLength="2"
          maxLength="40"
          value={name || ''}
          onChange={handleChangeOnName}
          required
        />
        <span className="pop-up__error" id="input-userName-error"></span>
        <input
          className="pop-up__input pop-up__input_edit-userAbout"
          name="userAbout"
          id="input-userAbout"
          placeholder="Расхититель гробниц"
          type="text"
          minLength="2"
          maxLength="400"
          value={description || ''}
          onChange={handleChangeOnDescription}
          required
        />
        <span className="pop-up__error" id="input-userAbout-error"></span>
      </PopupWithForm>
    );
}

export default EditProfilePopup;
