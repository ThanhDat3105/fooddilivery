'use client'
import "./contact.scss"

import img from "../../../public/images/imgs/contact/Illustrations.png"

export default function page() {
    return (
        <div className="contact">
            <div className="container_all">
                <div className="contact_top">
                    <div className="title">
                        <h2>Let’s talk with us for any issues or problem</h2>
                    </div>
                    <div className="image">
                        <img src={img.src} alt="" />
                    </div>
                </div>
                <div className="contact_bottom">
                    <div className="info">
                        <div className="info_top">
                            <div className="in4_left">
                                <div className="input_top">
                                    <input type="text" placeholder="Your name here" />
                                </div>
                                <div className="input_bottom">
                                    <input type="text" placeholder="Your phone number here" />
                                </div>
                            </div>
                            <div className="in4_right">
                                <div className="input_top">
                                    <input type="text" placeholder="Your email here" />
                                </div>
                                <div className="input_bottom">
                                    <input type="text" placeholder="Sub. I want to become a partner" />
                                </div>
                            </div>
                        </div>
                        <div className="info_bottom">
                            <textarea name="myText" id="myText" cols={30} rows={10} placeholder="Write your message here" />
                        </div>
                        <div className="button_send">
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
