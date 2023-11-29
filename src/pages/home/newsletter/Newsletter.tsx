import intersect from "../../../../public/images/imgs/newsletter/Intersect.png"
import burger from "../../../../public/images/imgs/newsletter/image 6.png"
import pizza from "../../../../public/images/imgs/newsletter/image 8.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./newsletter.scss"

export default function Newsletter() {
    return (
        <div className={`newsletter `}>
            <div className="container_newsletter">
                <img src={intersect.src} alt="" className="intersect" />
                <div className="newsletter_text">
                    <h2>Subscribe newsletter to get updates</h2>
                    <p>Download the Just Eat app for faster ordering and more personalised recommendations.</p>
                    <div className="search_input">
                        <Form.Control
                            type="text"
                            placeholder="Enter your email"
                            className=" mr-sm-2"
                        />
                        <Button type="submit" className="button_submit">Subscribe</Button>
                    </div>
                </div>
                <img src={burger.src} alt="" className="burger" />
                <img src={pizza.src} alt="" className="pizza" />
            </div>
        </div>
    )
}