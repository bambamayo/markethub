import * as React from "react";

import landingImg from "../assets/images/shopping-cart-monochrome.svg";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function Landing() {
  const [authType, setAuthType] = React.useState<string>("signin");

  const handleSetAuthType = (value: string) => {
    setAuthType(value);
  };

  return (
    <section className="landing">
      <div className="banner">
        <div className="banner__inner">
          <img
            src={landingImg}
            alt="a man pushing a shopping cart"
            className="banner__image"
          />
        </div>
      </div>
      <div className="form">
        <div className="form__header__cont">
          <h2 className="form__header">
            {authType === "signin"
              ? "Log into your account"
              : "Create a free account"}
          </h2>
        </div>
        {authType === "signin" ? (
          <Signin buttonClicked={handleSetAuthType} />
        ) : (
          <Signup buttonClicked={handleSetAuthType} />
        )}
      </div>
    </section>
  );
}
