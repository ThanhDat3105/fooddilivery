import logo from '../../public/images/imgs/Logo.png'
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagramSquare } from "react-icons/fa"
import Button from 'react-bootstrap/Button';
import "@/styles/footer.scss"

import "@/app/globals.css"

export default function Footer() {
    return (
        <div className={`footer`}>
            <div className="container_footer container_all">
                <div className="footer_all">
                    <div className="footer_left">
                        <Image src={logo} alt='logo' style={{ cursor: "pointer" }} />
                        <p>Food, drinks, groceries, and more available for delivery and pickup.</p>
                        <div className="icons">
                            <Button className='button_footer btn-dark'><FaFacebookF className="icon" /></Button>
                            <Button className='button_footer btn-dark'><FaLinkedinIn className="icon" /></Button>
                            <Button className='button_footer btn-dark'><FaTwitter className="icon" /></Button>
                            <Button className='button_footer btn-dark'><FaInstagramSquare className="icon" /></Button>
                        </div>
                    </div>
                    <div className="footer_right">
                        <div className="item">
                            <h5>Get Started</h5>
                            <p>FoodEats Sign In</p>
                            <p>FoodEats Sign Up</p>
                            <p>Become a Rider</p>
                            <p>Become a Partner</p>
                        </div>
                        <div className="item">
                            <h5>Get Help</h5>
                            <p>Resources</p>
                            <p>Support</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="item">
                            <h5>Company</h5>
                            <p>About Us</p>
                            <p>Customer Rights</p>
                            <p>Career</p>
                            <p>Press</p>
                            <p>Blog</p>
                        </div>
                        <div className="item">
                            <h5>FootEats For</h5>
                            <p>Enterprise</p>
                            <p>For Small Business</p>
                            <p>Personal</p>
                            <p>Riders</p>
                        </div>
                    </div>
                </div>
                <div className='border_footer'></div>
                <div className="footer_end">
                    <p>Copyright © 2022 UIHUT all rights reserved.</p>
                    <div className="right">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}