import * as React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <div className="auth">
      <div className="auth__google">
        <button className="auth__google__btn">
          <FcGoogle />
          <span>Sign in with google</span>
        </button>
      </div>
      <div className="auth__other">OR</div>
      <form className="auth__form">
        <div className="auth__group">
          <label htmlFor="email" className="auth__label">
            Email
          </label>
          <input
            type="email"
            className="auth__input"
            value={email}
            placeholder="your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="auth__group">
          <label htmlFor="password" className="auth__label">
            Password
          </label>
          <input
            type="password"
            className="auth__input"
            value={password}
            placeholder="your email"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="checkbox" className="auth__input--tooglehide" />
          show password
        </div>
        <div className="auth__group">
          <button className="auth__submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}
