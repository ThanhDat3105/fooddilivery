import logo from '../../public/images/imgs/Logo.png'
import Image from 'next/image';
import "@/styles/header.scss"
import { DESKTOP, IPAD_PRO, MOBILE, TABLET } from "@/constants";
import { withViewport } from "@/HOCs/withViewport";

import { CiMenuFries } from "react-icons/ci"
import { FiChevronDown } from "react-icons/fi"
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

import Navbar from 'react-bootstrap/Navbar';
import { useRef, useState } from 'react';

import "@/app/globals.css"
import "@/styles/reset.css"

import ModalCart from './modal_cart/ModalCart';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Props {
    device: any;
}

function Header(props: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const cartItem = useSelector((state: RootState) => state.cart.cartItems)
    const [show, setShow] = useState<boolean>(false)
    const [cart, setCart] = useState<boolean>(true)
    const [menu, setMenu] = useState<boolean>(false)
    const [close, setClose] = useState<boolean>(false)

    const addActive = () => {
        if (!menu) {
            document.querySelector(".menu")?.classList.add("list_menu");
            setMenu(true)
        } else {
            document.querySelector(".menu")?.classList.remove("list_menu");
            setMenu(false)
        }
    }

    const setHeight = (value: any) => {
        if (value?.current) {
            const clientHeight = Number(value.current.clientHeight);
            if (clientHeight > 0) {
                value.current.style.height = "0px";
                setClose(false)
            } else {
                value.current.style.height = value.current.scrollHeight + "px";
                setClose(true)
            }
        }
    }

    const renderHeader = () => {
        if (props?.device === "DESKTOP" || props?.device === "IPAD_PRO") {
            return (
                <div className="container_header container_all">
                    <Navbar.Brand href="#home"><Image src={logo} alt='logo' style={{ cursor: "pointer" }} /></Navbar.Brand>
                    <div className="menu_header">
                        <p>Get the app</p>
                        <p>About</p>
                        <p onClick={() => setHeight(ref)}>Page<FiChevronDown /></p>
                        <div ref={ref} className="dropdown_page">
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                            <p>404 Page</p>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className='button'>
                        <div className="sign_in" onClick={() => setShow(true)}>{cart ?
                            <div className='number_shop' >
                                <FaShoppingCart className="cart_shop" />
                                <p>{cartItem.length}</p>
                            </div>
                            : "Sign in"}
                        </div>
                        <button type="submit" className="sign_up">Sign up</button>
                    </div>
                </div>
            )
        } else if (props?.device === "TABLET" || props?.device === "MOBILE") {
            return (
                <div className="container_header container_all">
                    <Navbar.Brand href="#home"><Image src={logo} alt='logo' style={{ cursor: "pointer" }} /></Navbar.Brand>
                    <CiMenuFries onClick={() => addActive()} className="menu_icon" />
                    <div className="menu">
                        <p className='d_none'>Get the app</p>
                        <p className='d_none'>About</p>
                        <p onClick={() => setHeight(ref)} className='d_none'>Page<FiChevronDown /></p>
                        <div ref={ref} className="dropdown_page">
                            <p>Blog</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                            <p>404 Page</p>
                            <p>Coming Soon</p>
                        </div>
                        {close ? <AiOutlineClose onClick={() => setHeight(ref)} className="btn_close" /> : ""}
                        <div className='button d_none'>
                            <div style={{ cursor: "pointer", marginRight: 30 }} className="sign_in">
                                {cart ?
                                    <div className='number_shop' onClick={() => setShow(true)}>
                                        <FaShoppingCart className="cart_shop" />
                                        <p>{cartItem.length}</p>
                                    </div>
                                    : "Sign in"}
                            </div>
                            <button type="submit" className="sign_up">Sign up</button>
                        </div>
                    </div>

                </div>
            )
        }
    }

    return (
        <>
            <Navbar expand="lg" className={`header ${cart ? "cart" : ""}  ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPAD_PRO && "ipad_pro"} ${props.device === DESKTOP && "desktop"}`} >
                {renderHeader()}
            </Navbar>
            <ModalCart show={show} setShow={setShow} />
        </>
    )
}

export default withViewport(Header)