import React from "react";

function Login({ handleLogin }) {
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
    handleLogin(password, email)
  };
  return (
    <div className="auth-reg">
      <h2 className="auth-reg__title">Вход</h2>
      <form className="auth-reg__form" id="login" onSubmit={handleSubmit}>
        <input className="auth-reg__input" name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input className="auth-reg__input" name="password" type="password" placeholder="Пароль" onChange={handleChange} />
        <button className="auth-reg__button">Войти</button>
      </form>
    </div>
  )
}

export default Login;
