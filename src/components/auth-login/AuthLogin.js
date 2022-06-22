import "./AuthLogin.css";
import apple from "../../images/apple.svg";
import google from "../../images/google.svg";

function AuthLogin() {
  return (
    <div className="auth-button-container">
      <button className="auth-button">
        <img alt="google" src={google} />
        Log in with Google
      </button>

      <button className="auth-button">
        <img alt="apple" src={apple} />
        Log in with Apple
      </button>
    </div>
  );
}

export default AuthLogin;
