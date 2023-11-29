import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { AiOutlineClose } from "react-icons/ai"

import "./sale.scss"

import sale from "../../../../public/images/imgs/home/sale/sale.png"

import { DESKTOP, IPAD_PRO, MOBILE, TABLET } from "@/constants";
import { withViewport } from "@/HOCs/withViewport";

interface Props {
    device: any;
}

function Sale(props: Props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                className={`modal_sale ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPAD_PRO && "ipad_pro"} ${props.device === DESKTOP && "desktop"}`}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <div className="sale">
                        <div className="img_sale">
                            <img src={sale.src} alt="" />
                        </div>
                        <div className="title_sale">
                            <div className="title_top">
                                <h3>UNLOCK</h3>
                                <h1>$5 OFF</h1>
                                <h3>Your Order</h3>
                            </div>
                            <div className="title_bottom">
                                <div className="form_item">
                                    <div className="item">
                                        <p>Enter your birthday</p>
                                        <Form.Control
                                            type="date"
                                            placeholder="Location or zip code"
                                            className=" mr-sm-2"
                                        />
                                    </div>
                                    <div className="item">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your email"
                                            className=" mr-sm-2"
                                        />
                                    </div>
                                    <div className="item">
                                        <Button type="submit" className="button_submit">Continue</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button_close" onClick={() => handleClose()}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default withViewport(Sale)