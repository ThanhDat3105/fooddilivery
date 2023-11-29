import "./comingSoon.scss"

import img from "../../../public/images/imgs/coming/Group 18639.png"

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ComingSoon() {
    return (
        <div className="coming_soon">
            <div className="container_all">
                <div className="content">
                    <div className="image">
                        <img src={img.src} alt="rocket" />
                    </div>
                    <div className="title">
                        <h2>Coming Soon</h2>
                        <p>Are you Ready to get something new from us. Then subscribe the news latter to get latest updates?</p>
                    </div>
                    <div className="icons">
                        <div className="facebook icon_contact">
                            <FaFacebookF />
                        </div>
                        <div className="linked icon_contact">
                            <FaLinkedinIn />
                        </div>
                        <div className="twitter icon_contact">
                            <FaTwitter />
                        </div>
                        <div className="instagram icon_contact">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
