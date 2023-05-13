function ImagePopup({ card, onClose }) {
  return (
    <div className={`pop-up pop-up_card-image ${card ? 'pop-up_opened' : ''}`}>
      <figure className="pop-up__figure">
        <img className="pop-up__image" 
         alt={card?.name} 
         src={card?.link}
         />
        <figcaption className="pop-up__figcaption">{card?.name}</figcaption>
        <button className="button pop-up__button-close" type="button" onClick={onClose}></button>
      </figure>
    </div>
  );
}

export default ImagePopup;