import * as React from "react";
import { FcGoogle } from "react-icons/fc";
import { handlePasswordToggle } from "../../helpers/helpers";

interface SigninProps {
  buttonClicked: (value: string) => void;
}

export default function Signin({ buttonClicked }: SigninProps) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handlePasswordVisibility = () => {
    if (inputRef.current !== null) {
      handlePasswordToggle(inputRef.current);
    }
  };

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
            id="email"
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
            id="password"
            type="password"
            className="auth__input"
            value={password}
            ref={inputRef}
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="checkbox"
            onClick={handlePasswordVisibility}
            className="auth__input--tooglehide"
          />
          <span className="auth__input--showtext">show password</span>
        </div>
        <div className="auth__group">
          <button className="auth__submit">Sign in</button>
        </div>
      </form>
      <button
        onClick={() => buttonClicked("signup")}
        className="auth__changeview"
      >
        or create your free account
      </button>
    </div>
  );
}
