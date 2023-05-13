function PopupWithForm({ popupName, popupTitle, popupTextButton, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`pop-up pop-up_${popupName} ${isOpen ? 'pop-up_opened' : ''}`}>
      <div className="pop-up__container">
        <button className="button pop-up__button-close" type="button" onClick={onClose}></button>
        {
        popupTitle ?
          <h2 className="pop-up__title">{`${popupTitle}`}</h2>
          : null
        }
        <form className="pop-up__form" name={`${popupName}`} method="post" onSubmit={onSubmit}>
          {children}
          {
          popupTextButton ?
            <button className="button pop-up__button-save" type="submit" onChange={(evt) => evt.preventDefault()}>
              {popupTextButton}
            </button>
            : null
          }
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
