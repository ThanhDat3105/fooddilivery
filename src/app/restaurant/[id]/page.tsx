'use client'
import Form from 'react-bootstrap/Form';

import { IoIosArrowBack } from "react-icons/io"

import "./cardFood.scss"
import "@/styles/reset.css"
import { useState } from "react";

import { addToCart } from "@/redux/features/cartSlice"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { useRouter } from "next/navigation";

import 'react-toastify/dist/ReactToastify.css';

export default function Card({ params, size }: { params?: any, size?: string }) {
    const id = params.id

    const infoCard = useSelector((state: RootState) => state.cart.infoCard)
    const dispatch = useDispatch()
    const router = useRouter()
    const [number, setNumber] = useState<number>(1)

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    const decreaseNumber = () => {
        if (number === 0) {
            return
        } else {
            setNumber(number - 1)
        }
    }

    const addToCartFc = () => {
        if (infoCard) {
            dispatch(
                addToCart({ ...infoCard, quantity: number })
            )
        }
    }

    return (
        <div className={`card `}>
            <div className="container_all">
                <div className={`card_food ${size}`}>
                    <p className="back_res" onClick={() => router.push("/restaurant")}><IoIosArrowBack className="icon_back" /> Back to The Burger Cafe</p>
                    <div className="content_card">
                        <div className="content_left">
                            <div className="image">
                                <img src={infoCard?.img.src} alt="" />
                            </div>
                        </div>
                        <div className="content_right">
                            <h3>{infoCard?.name}</h3>
                            <p className="right_content">{infoCard?.desc}</p>
                            <p className="right_price">${infoCard?.price}</p>
                            <p>Special Instructions</p>
                            <div className="card_cmt">
                                <Form.Control placeholder="Ad any request here" as="textarea" rows={7} className="textarea_cmt" />
                            </div>
                            <div className="right_add">
                                <div className="number_right">
                                    <div className="decrease" onClick={() => decreaseNumber()}>-</div>
                                    <div className="number">{number}</div>
                                    <div className="increase" onClick={() => increaseNumber()}>+</div>
                                </div>
                                <button onClick={() => addToCartFc()} className="add_card">
                                    Add to cart: {infoCard?.price ? infoCard.price * number : ""}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

