import logo from '../images/header/logo.svg';
import {Link, Routes, Route} from 'react-router-dom';
import React from 'react';


function Header({userMail, onSignout}) {
  const [isToggleBurgerButton, setToggleBurgerButton] = React.useState(false);

  function handleToggleBurgerButton() {
    setToggleBurgerButton(!isToggleBurgerButton);
  }

  return (
    <header className={`header page__header ${isToggleBurgerButton ? 'header_opened' : ''}`}>
      <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <button className='header__burger-button' onClick={handleToggleBurgerButton}>
                <span className='header__burger-span'></span>
                <span className='header__burger-span'></span>
                <span className='header__burger-span'></span>
              </button>
              <div className='header__container'>
                <span className='header__email'>{userMail}</span>
                <Link className='header__link' style={{color:'#A9A9A9'}} onClick={onSignout}>Выйти</Link>
              </div>
            </>
          }
        />
        <Route path='/sign-in' element={<Link className='header__link' to="/sign-up">Регистрация</Link>} />
        <Route path='/sign-up' element={<Link className='header__link' to="/sign-in">Войти</Link>} />
      </Routes>
    </header>
  );
}

export default Header;
