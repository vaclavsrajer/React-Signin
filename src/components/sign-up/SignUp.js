import React, { useState } from "react";
import AuthLogin from "../auth-login/AuthLogin";

import "./SignUp.css";

function SignUp() {
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    password: "",
    date: "",
    gender: "",
  });

  const dateRegex =
    /^(?=\\d{2}([-.,\\/])\\d{2}\\1\\d{4}$)(?:0[1-9]|1\\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\\d{4}$/;

  function handleChange(e) {
    const { name, value, type, id } = e.target;
    console.log(e.target.value);
    setRegisterData(prevValue => ({
      ...prevValue,
      [name]: name === "date" ? (value.match(dateRegex) ? value : "") : type === "radio" ? id : value
    }));
  }

  return (
    <div className="sing-up-container">
      <AuthLogin />
      <form className="sing-up-inputs">
        <input
          className="normal-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={registerData.email}
          onChange={handleChange}
        />
        <input
          className="normal-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={registerData.name}
          onChange={handleChange}
        />
        <input
          className="normal-input"
          type="password"
          name="password"
          placeholder="Create Password"
          value={registerData.password}
          onChange={handleChange}
        />
        <div className="sign-up-special-inputs">
          <input
            className="sign-up-date"
            type="text"
            name="date"
            placeholder="DD/MM/YY"
            value={registerData.date}
            onChange={handleChange}
          />
          <fieldset className="sign-up-checkboxes">
            <input
              className="sign-up-special-input"
              type="radio"
              name="gender"
              id="male"
              checked={registerData.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              checked={registerData.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </fieldset>
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
