import "./AuthLogin.css";
import apple from "../../images/apple.svg";
import google from "../../images/google.svg";

function AuthLogin() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="auth-button-container">
      <button
        onClick={() => openInNewTab("https://google.com")}
        className="auth-button"
      >
        <img alt="google" src={google} />
        Log in with Google
      </button>

      <button onClick={() => openInNewTab("https://www.apple.com/")} className="auth-button">
        <img alt="apple" src={apple} />
        Log in with Apple
      </button>
    </div>
  );
}

export default AuthLogin;
