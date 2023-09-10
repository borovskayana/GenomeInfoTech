import "../../css/sign-in/SignUp.css";
import { Link } from "react-router-dom";
import SignUpInfo from "./SignUpInfo";
import SignInInfo from "./SignInInfo";

const SignUpForm = ({ isLogin }) => {
  return (
    <>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {isLogin ? <SignInInfo /> : <SignUpInfo />}

        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin ? (
            <div className="div-1">
              <span className="span-1">Don't have an account yet?</span>
              <span className="span-2">Register</span>
            </div>
          ) : (
            <div className="div-2">
              <span className="span-1">Already a member?</span>
              <span className="span-2">Log in</span>
            </div>
          )}
        </Link>
      </div>
    </>
  );
};
export default SignUpForm;
