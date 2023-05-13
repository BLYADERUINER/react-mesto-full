function PopupLoading ({ isLoading }) {
  return(
    <div className={`pop-up pop-up_loading ${isLoading ? 'pop-up_opened' : ''}`} style={{backgroundColor: "rgba(0, 0, 0, .9)"}}>
      <h2 className="pop-up__loading-text">Загрузка...</h2>
    </div>
  )
}

export default PopupLoading;
