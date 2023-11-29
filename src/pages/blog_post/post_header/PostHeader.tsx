import "./postHeader.scss"

import imgPoster from "../../../../public/images/imgs/blog/Ellipse 1888.png"
import imgVegetarian from "../../../../public/images/imgs/blog/Rectangle 6104.png"

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function PostHeader() {
    return (
        <div className="post_header">
            <div className="container_all">
                <div className="blog_show">
                    <div className="blog_left">
                        <div className="blog_time">
                            <p className="blt_l">Nove 06, 2022</p>
                            <div className="separate" />
                            <p className="blt_r">14 min read</p>
                        </div>
                        <div className="blog_title">
                            <h2> Most popular vegetarian and vegan restaurants in your city.</h2>
                        </div>
                        <div className="blog_description">
                            Looking to add more leafy greens and plant-based burgers to your plate this fall? Today, in celebration of World Vegetarian Day on October 1, we discover few restaurants for you.
                        </div>
                        <div className="blog_poster">
                            <div className="img_poster">
                                <img src={imgPoster.src} alt="" />
                            </div>
                            <div className="name_poster">David Warner</div>
                        </div>
                    </div>
                    <div className="blog_right">
                        <img src={imgVegetarian.src} alt="" />
                    </div>
                </div>
                <div className="blog_contact">
                    <div className="contact">
                        <div className="facebook icon_contact">
                            <FaFacebookF />
                        </div>
                        <div className="linked icon_contact">
                            <FaLinkedinIn />
                        </div>
                        <div className="twitter icon_contact">
                            <FaTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
