import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  // создаем реф инпута
  const avatarInputRef = React.useRef();

  function clearingInputValue() {
    avatarInputRef.current.value = '';
  }

  React.useEffect(() => {
    clearingInputValue();
  }, [isOpen]);

  function handleOnSubmit(event) {
    event.preventDefault();

    // отправляем полученное значение рефа
    onUpdateAvatar(avatarInputRef.current.value);
  }

  return(
    <PopupWithForm
      popupName="edit-avatar"
      popupTitle="Обновить аватар"
      popupTextButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleOnSubmit}
    >
      <input
          className="pop-up__input pop-up__input_avatar-link"
          name="avatarLink"
          id="input-avatarLink"
          placeholder="Ссылка на картинку"
          type="url"
          ref={avatarInputRef}
          required
        />
        <span className="pop-up__error" id="input-avatarLink-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
