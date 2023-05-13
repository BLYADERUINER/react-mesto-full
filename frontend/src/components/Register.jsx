import React from "react";
import { Link } from "react-router-dom";

function Register ({ handleRegister }) {
  const [formValue, setFormValue] = React.useState({
    password: '',
    email: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {password, email} = formValue;
    handleRegister(password, email)
  };

  return (
    <div className="auth-reg">
      <h2 className="auth-reg__title">Регистрация</h2>
      <form className="auth-reg__form" id="register"  onSubmit={handleSubmit}>
        <input className="auth-reg__input" name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input className="auth-reg__input" name="password" type="password" placeholder="Пароль" onChange={handleChange} />
        <button className="auth-reg__button">Зарегистрироваться</button>
        <Link className="auth-reg__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
      </form>
    </div>
  )
}

export default Register;
