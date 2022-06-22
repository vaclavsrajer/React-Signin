import "./SignUp.css";
import AuthLogin from "../auth-login/AuthLogin";

function SignUp() {
  return (
    <div className="sing-up-container">
      <AuthLogin />
      <form className="sing-up-inputs">
        <input
          className="normal-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={""}
        />
        <input
          className="normal-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={""}
        />
        <input
          className="normal-input"
          type="password"
          name="password"
          placeholder="Create Password"
          value={""}
        />
        <div className="sign-up-special-inputs">
          <input className="sign-up-date" type="text" name="date" placeholder="DD/MM/YY" />
          <fieldset className="sign-up-checkboxes">
            <input
              className="sign-up-special-input"
              type="radio"
              name="email"
              id="male"
              // checked={formData.employment === "unemployed"}
              // onChange={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="email"
              id="female"
              // checked={formData.employment === "unemployed"}
              // onChange={handleChange}
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
