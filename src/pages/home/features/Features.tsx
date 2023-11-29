import chef from "../../../../public/images/imgs/features/Group.png"
import ship from "../../../../public/images/imgs/features/Illustrations.png"
import vector1 from "../../../../public/images/imgs/features/Vector.png"
import Rectangle4 from "../../../../public/images/imgs/features/Rectangle 4.png"
import Rectangle2 from "../../../../public/images/imgs/features/Rectangle 2.png"
import people1 from "../../../../public/images/imgs/features/people.png"

import Button from 'react-bootstrap/Button';

import { BiPlay } from "react-icons/bi"
import { LuDot } from "react-icons/lu";

import "./features.scss"

import { useState } from "react"
import PopupVideo from "./PopupVideo"

export default function Features() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={`features`}>
            <div className="container_features container_all">
                <div className="features_header">
                    <h2>It’s all here. All in one platform.</h2>
                    <p>Order food and grocery delivery online from hundreds of restaurants and shops nearby.</p>
                </div>
                <div className="features_bottom">
                    <div className="card_1 card_features">
                        <div className="img">
                            <img src={ship.src} alt="" />
                        </div>
                        <h3>Deliver With Us</h3>
                        <div className="card_text">
                            <p>Sign up today, start earning tomorrow. Build a new career in delivery service with us.</p>
                        </div>
                        <div className="card_button">
                            <Button type="submit" className="button_submit">Learn More</Button>
                        </div>
                    </div>
                    <div className="card_2 card_features">
                        <div className="img">
                            <img src={chef.src} alt="" />
                        </div>
                        <h3>Partner With Us</h3>
                        <div className="card_text">
                            <p>Sign up today, start earning tomorrow. Build a new career in delivery service with us.</p>
                        </div>
                        <div className="card_button">
                            <Button type="submit" className="button_submit">Learn More</Button>
                        </div>
                    </div>
                </div>
                <div className="features_employ">
                    <div className="employ_left">
                        <h2>Feed your employees</h2>
                        <p>Fuel your business with great food. Treat employees and clients to corporate meals with food delivery that’s customizable to your business.</p>
                        <ul>
                            <li><LuDot className="dots" />Meals in the office</li>
                            <li><LuDot className="dots" />Meals after hours</li>
                            <li><LuDot className="dots" />Meals at house</li>
                            <li><LuDot className="dots" />Meals while traveling</li>
                        </ul>
                        <button type="submit" className="button_submit">Get Started Now</button>
                    </div>
                    <div className="employ_right">
                        <img className="rectangle2" src={Rectangle2.src} alt="" />
                        <img src={Rectangle4.src} alt="" />
                        <img src={vector1.src} alt="" />
                        <img src={people1.src} alt="" />
                        <Button onClick={() => setShow(true)} type="submit" className="button_submit"><BiPlay className="btn_play" /></Button>
                    </div>
                </div>
            </div>
            {show === true && <PopupVideo show={show} handleClose={handleClose} handleShow={handleShow} />}
        </div>
    )
}