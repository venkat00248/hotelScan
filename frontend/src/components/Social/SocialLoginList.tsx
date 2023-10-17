import "./SocialLogin.scss";
export const SocialLoginList = () => {
  return (
    <div className="socialLoginList">
      <div className="pen-container">
        <button id="facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </button>
        <button id="instagram">
          <i className="fa-brands fa-instagram"></i>
        </button>
        <button id="googleplus">
          <i className="fa-brands fa-google "></i>
        </button>
      </div>
    </div>
  );
};
