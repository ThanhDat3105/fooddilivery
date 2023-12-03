import "./signInUp.scss";

import google from "../../../public/images/icons/google.png";
import facebook from "../../../public/images/icons/facebook.png";
import apple from "../../../public/images/icons/apple.png";
import React, { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

interface Props {
  showSignIn: boolean;
  showSignUp: boolean;
  handleClose: () => void;
  setShowSignUp: (value: boolean) => void;
  setShowSignIn: (value: boolean) => void;
}

export default function SignInUp(props: Props) {
  const [inUp, setInUp] = useState<boolean>(false);
  useEffect(() => {
    if (props.showSignIn || props.showSignUp === true) {
      document.querySelector(".modal_signIn")?.classList.remove("close");
      document.querySelector(".modal_signIn")?.classList.add("show");
      setInUp(true);
    } else if (props.showSignIn || props.showSignUp === false) {
      document.querySelector(".modal_signIn")?.classList.remove("show");
      setInUp(false);
    }
  }, [props.showSignIn || props.showSignUp]);

  return (
    <div className="modal_signIn">
      <div className="container_all">
        <div className="content">
          <div className="container_content">
            <div className="option">
              {inUp ? <h4>Sign In</h4> : <h4>Sign Up</h4>}
              <div className="option_signIN">
                <div className="facebook">
                  <button>
                    <div className="icon">
                      <img
                        src={facebook.src}
                        alt="google"
                        className="icon_google"
                      />
                    </div>
                    <p>Continue with Facebook</p>
                  </button>
                </div>
                <div className="google">
                  <button>
                    <div className="icon">
                      <img
                        src={google.src}
                        alt="google"
                        className="icon_google"
                      />
                    </div>
                    <p>Continue with Google</p>
                  </button>
                </div>
                <div className="apple">
                  <button>
                    <div className="icon">
                      <img
                        src={apple.src}
                        alt="google"
                        className="icon_google"
                      />
                    </div>
                    <p>Continue with Apple</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="or">
              <div className="or_top">
                <h4>OR</h4>
                {inUp ? (
                  <>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                  </>
                )}
              </div>
              {inUp ? (
                <div className="or_bottom">
                  <p>Forgot Password</p>
                </div>
              ) : (
                ""
              )}
              <button className="button_signIn">
                {inUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className="sign_up">
              {inUp ? (
                <p>
                  Don’t a have account?
                  <b onClick={() => setInUp(false)}>Sign Up</b>
                </p>
              ) : (
                <p>
                  Have a account?
                  <b onClick={() => setInUp(true)}>Sign In</b>
                </p>
              )}
            </div>
          </div>
          <div className="button_close">
            <AiOutlineClose onClick={() => props.handleClose()} />
          </div>
        </div>
      </div>
    </div>
  );
}
