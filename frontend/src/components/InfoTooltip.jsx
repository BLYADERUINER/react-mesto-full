import PopupWithForm from './PopupWithForm';
import imgTrue from '../images/pop-up_auth-reg/true.svg';
import imgFalse from '../images/pop-up_auth-reg/false.svg'

function InfoTooltip({isOpen, onClose, handleToggleTextTooltip, handleToggleImageTooltip}) {
  return(
    <PopupWithForm popupName={'info-tooltip'} isOpen={isOpen} onClose={onClose}>
          <img className='pop-up__tooltip-image' src={handleToggleImageTooltip ? imgTrue : imgFalse} alt='Картинка-подсказка' />
          <h2 className="pop-up__tooltip-text">
              {handleToggleTextTooltip}
          </h2>
    </PopupWithForm>
  )
}

export default InfoTooltip;
