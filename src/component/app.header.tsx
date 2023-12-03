import logo from "../../public/images/imgs/Logo.png";
import Image from "next/image";
import "@/styles/header.scss";
import { DESKTOP, IPAD_PRO, MOBILE, TABLET } from "@/constants";
import { withViewport } from "@/HOCs/withViewport";

import { CiMenuFries } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Navbar from "react-bootstrap/Navbar";
import { useRef, useState } from "react";

import "@/app/globals.css";
import "@/styles/reset.css";

import ModalCart from "./modal_cart/ModalCart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SignInUp from "./signInUp/SignInUp";
import { useRouter } from "next/navigation";

interface Props {
  device: any;
}

function Header(props: Props) {
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);
  const cartItem = useSelector((state: RootState) => state.cart.cartItems);
  const [show, setShow] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(false);

  const addActive = () => {
    if (!menu) {
      document.querySelector(".menu")?.classList.add("list_menu");
      setMenu(true);
    } else {
      document.querySelector(".menu")?.classList.remove("list_menu");
      setMenu(false);
    }
  };

  const setHeight = (value: any) => {
    if (value?.current) {
      const clientHeight = Number(value.current.clientHeight);
      if (clientHeight > 0) {
        value.current.style.height = "0px";
        setClose(false);
      } else {
        value.current.style.height = value.current.scrollHeight + "px";
        setClose(true);
      }
    }
  };

  const navigateHeader = (name: string) => {
    router.push(`/${name}`);
    setHeight(ref);
  };

  const renderHeader = () => {
    if (props?.device === "DESKTOP" || props?.device === "IPAD_PRO") {
      return (
        <div className="container_header container_all">
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            />
          </Navbar.Brand>
          <div className="menu_header">
            <p>Get the app</p>
            <p onClick={() => router.push("/about")}>About</p>
            <p onClick={() => setHeight(ref)}>
              Page
              <FiChevronDown />
            </p>
            <div ref={ref} className="dropdown_page">
              <p onClick={() => navigateHeader("blog")}>Blog</p>
              <p onClick={() => navigateHeader("restaurant")}>Restaurant</p>
              <p onClick={() => navigateHeader("contact")}>Contact</p>
              <p onClick={() => navigateHeader("FAQ")}>FAQ</p>
              <p onClick={() => navigateHeader("coming_soon")}>Coming Soon</p>
            </div>
          </div>
          <div className="button">
            {cart ? (
              <div className="sign_in" onClick={() => setShow(true)}>
                <div className="number_shop">
                  <FaShoppingCart className="cart_shop" />
                  <p>{cartItem.length}</p>
                </div>
              </div>
            ) : (
              <div className="sign_in" onClick={() => setShowSignIn(true)}>
                <p className="text_signIn">Sign in</p>
              </div>
            )}
            <button
              type="submit"
              className="sign_up"
              onClick={() => setShowSignUp(true)}
            >
              Sign up
            </button>
          </div>
        </div>
      );
    } else if (props?.device === "TABLET" || props?.device === "MOBILE") {
      return (
        <div className="container_header container_all">
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              alt="logo"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            />
          </Navbar.Brand>
          <CiMenuFries onClick={() => addActive()} className="menu_icon" />
          <div className="menu">
            <p className="d_none">Get the app</p>
            <p onClick={() => router.push("/about")} className="d_none">
              About
            </p>
            <p onClick={() => setHeight(ref)} className="d_none">
              Page
              <FiChevronDown />
            </p>
            <div ref={ref} className="dropdown_page">
              <p onClick={() => navigateHeader("blog")}>Blog</p>
              <p onClick={() => navigateHeader("restaurant")}>Restaurant</p>
              <p onClick={() => navigateHeader("contact")}>Contact</p>
              <p onClick={() => navigateHeader("FAQ")}>FAQ</p>
              <p onClick={() => navigateHeader("coming_soon")}>Coming Soon</p>
            </div>
            {close ? (
              <AiOutlineClose
                onClick={() => setHeight(ref)}
                className="btn_close"
              />
            ) : (
              ""
            )}
            <div className="button d_none">
              {cart ? (
                <div
                  style={{ cursor: "pointer", marginRight: 30 }}
                  className="sign_in"
                  onClick={() => setShow(true)}
                >
                  <div className="number_shop">
                    <FaShoppingCart className="cart_shop" />
                    <p>{cartItem.length}</p>
                  </div>
                </div>
              ) : (
                <div className="sign_in" onClick={() => setShowSignIn(true)}>
                  <p className="text_signIn">Sign in</p>
                </div>
              )}
              <button
                type="submit"
                className="sign_up"
                onClick={() => setShowSignUp(true)}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
      document.querySelector(".modal_cart")?.classList.add("close");
    } else if (showSignIn) {
      setShowSignIn(false);
      document.querySelector(".modal_signIn")?.classList.add("close");
    } else if (showSignUp) {
      setShowSignUp(false);
      document.querySelector(".modal_signIn")?.classList.add("close");
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`header ${cart ? "cart" : ""}  ${
          props.device === MOBILE && "mobile"
        } ${props.device === TABLET && "tablet"} ${
          props.device === IPAD_PRO && "ipad_pro"
        } ${props.device === DESKTOP && "desktop"}`}
      >
        {renderHeader()}
      </Navbar>
      <div
        onClick={() => handleClose()}
        className={`bg_opacity ${showSignUp || showSignIn ? "show" : "hide"} `}
      />
      <ModalCart show={show} setShow={setShow} handleClose={handleClose} />
      <SignInUp
        showSignIn={showSignIn}
        showSignUp={showSignUp}
        setShowSignIn={setShowSignIn}
        setShowSignUp={setShowSignUp}
        handleClose={handleClose}
      />
    </>
  );
}

export default withViewport(Header);
