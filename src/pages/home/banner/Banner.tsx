import people from "../../../../public/images/imgs/people.png"
import text from "../../../../public/images/imgs/text.png"
import locationIcon from "../../../../public/images/icons/Location.png"
import Image from "next/image";
import img6 from "../../../../public/images/imgs/image 6.png"
import img8 from "../../../../public/images/imgs/image 8.png"
import android from "../../../../public/images/icons/image 18.png"
import bggreen from "../../../../public/images/imgs/bggreen.png"
import bgyellow from "../../../../public/images/imgs/bgyellow.png"
import Vector from "../../../../public/images/imgs/Vector.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./banner.scss"

import { AiFillApple } from "react-icons/ai"

export default function Banner() {
    return (
        <div className={`banner`}>
            <div className="container_banner container_all">
                <div className="banner">
                    <div className="banner_left">
                        <p className="title">#The Best in Town</p>
                        <h1>
                            Get food
                            <img src={img8.src} alt="logo" className="img__banner" />
                            delivery and more
                            <img src={img6.src} alt="logo" className="img__banner" />
                        </h1>
                        <p>You want it. We get it. Food, drinks, groceries, and more available for delivery and pickup.</p>
                        <div className="search">
                            <div className="search_input">
                                <Form.Control
                                    type="text"
                                    placeholder="Location or zip code"
                                    className=" mr-sm-2"
                                />
                                <Image src={locationIcon} alt="location" className="location_Icon" />
                            </div>
                            <Button type="submit" className="button_submit">Explore</Button>
                        </div>
                        <h5>Get the app:
                            <button className="iphone"><AiFillApple className="img_logo" /></button>
                            <button className="android"><Image className="img_logo" src={android} alt="logo" /></button>
                        </h5>

                    </div>
                    <div className="bg__image">
                        <img className="bg_green" src={bggreen.src} />
                        <img className="bg_yellow" src={bgyellow.src} />
                        <img className="vector" src={Vector.src} />
                        <img className="text" src={text.src} />
                        <img className="people" src={people.src} />

                    </div>
                </div>
            </div>
        </div>
    )
}