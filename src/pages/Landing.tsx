import landingImg from "../assets/images/shopping-cart-monochrome.svg";
import SignIn from "../components/Signin";

export default function Landing() {
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
          <h2 className="form__header">Log into your account</h2>
        </div>
        <SignIn />
      </div>
    </section>
  );
}
