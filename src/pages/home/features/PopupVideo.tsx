import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AiOutlineClose } from "react-icons/ai"

import "./popupVideo.scss"

interface Props {
    show: boolean;
    handleClose: () => void;
    handleShow: () => void;
}

export default function PopupVideo(props: Props) {
    const { show, handleClose, handleShow } = props
    return (
        <>
            <Button variant="primary" onClick={() => handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                className='popup_video'
                show={show}
                onHide={() => handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div className="button_close">
                    <AiOutlineClose className="btn-close" onClick={() => handleClose()} />
                </div>
                <Modal.Body>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JsTJ60BPTfQ?si=38RHiJMDcSG33qmo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}
