import React, { useEffect, useState } from 'react'
import { cartItem } from '@/interfaces/cartItem'
import { useDispatch } from 'react-redux'
import { decreaseNumber, creaseNumber, deleteCart } from '@/redux/features/cartSlice'

import { FaTrash } from "react-icons/fa";
interface Props {
    cartItem: cartItem
    totalPriceAll: () => void
}

export default function ItemCart(props: Props) {
    const dispatch = useDispatch()
    const { img, name, price, quantity, id } = props.cartItem

    const [number, setNumber] = useState<number>(quantity)

    const decrease = () => {
        dispatch(
            decreaseNumber(props.cartItem)
        )
    }

    const crease = () => {
        dispatch(
            creaseNumber(props.cartItem)
        )
    }

    const handleDeleteCart = () => {
        dispatch(
            deleteCart(props.cartItem)
        )
    }

    useEffect(() => {
        setNumber(quantity)
        props.totalPriceAll()
    }, [quantity])

    return (
        <div className="item_cart">
            <div className="item_left">
                <div className="image_item">
                    <img src={img.src} alt="" />
                </div>
            </div>
            <div className="item_mid">
                <div className="info_item">
                    <div className="name_item">{name}</div>
                    <div className="price_item">${price * number}</div>
                </div>
                <div className="number_item">
                    <div className="decrease" onClick={() => decrease()}>-</div>
                    <div className="number">{number}</div>
                    <div className="increase" onClick={() => crease()}>+</div>
                </div>

            </div>
            <div className="item_right">
                <div className="button_delete" onClick={() => handleDeleteCart()}>
                    <FaTrash className="trash_delete" />
                </div>
            </div>
        </div>
    )
}
