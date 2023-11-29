import { AiOutlineClose } from "react-icons/ai"

import "./modalCart.scss"
import ItemCart from "../item_cart/ItemCart";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "@/interfaces/cartItem";
import React, { useEffect, useState } from "react";
import { totalPrice } from "@/redux/features/cartSlice";
import { DESKTOP, IPAD_PRO, MOBILE, TABLET } from "@/constants";
import { withViewport } from "@/HOCs/withViewport";

import emptyCart from "../../../public/images/empty-cart.png"

interface Props {
    show: boolean
    setShow: (value: boolean) => void
    device: any
}

function ModalCart(props: Props) {
    const dispatch = useDispatch()
    const cartState = useSelector((state: RootState) => state.cart)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        if (cartState.cartItems.length === 0) {
            setTotal(0)
        } else {
            setTotal(cartState.total)
        }
    }, [cartState])

    const totalPriceAll = () => {
        dispatch(
            totalPrice()
        )
    }

    const handleClose = () => {
        props.setShow(false)
        document.querySelector(".modal_cart")?.classList.add("close")
    }

    useEffect(() => {
        if (props.show === true) {
            document.querySelector(".modal_cart")?.classList.remove("close")
            document.querySelector(".modal_cart")?.classList.add("show")
        } else {
            document.querySelector(".modal_cart")?.classList.remove("show")
        }
    }, [props.show])

    return (
        <React.Fragment>
            <div className={`modal_cart ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPAD_PRO && "ipad_pro"} ${props.device === DESKTOP && "desktop"}`}   >
                <div className={`container_modal ${props.show ? "container_show" : ""} `}>
                    <div className="modal_all">
                        <div className="button_close" >
                            <AiOutlineClose className="btn_close" onClick={() => handleClose()} />
                        </div>
                        <h3>The Burger Cafe</h3>
                        {
                            cartState.cartItems.length !== 0 ?
                                <div className="item_all">
                                    {cartState.cartItems.map((ele: cartItem) => {
                                        return <ItemCart cartItem={ele} key={ele.id} totalPriceAll={totalPriceAll} />
                                    })}
                                </div>
                                :
                                <img src={emptyCart.src} alt="emptyCart" className="empty_cart" />
                        }
                        <div className="total_price">
                            Total: ${total}
                        </div>
                        <button className="btn_checkout">Go to Check Out</button>
                    </div>
                </div>
            </div>
            <div onClick={() => handleClose()} className={`bg_opacity ${props.show ? "show" : "hide"} `}></div>
        </React.Fragment>
    )
}

export default withViewport(ModalCart)