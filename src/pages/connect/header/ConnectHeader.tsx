import chicken from "../../../../public/images/imgs/about/image 73.png"
import vegetable from "../../../../public/images/imgs/about/image 29.png"
import bgGreen from "../../../../public/images/imgs/about/Rectangle 6101.png"
import vectorGreen from "../../../../public/images/imgs/about/Vector.png"
import manRed from "../../../../public/images/imgs//about/manRed.png"
import bgBlue from "../../../../public/images/imgs/about/Rectangle 6102.png"
import vectorBlue from "../../../../public/images/imgs/about/Vector (1).png"
import manWhite from "../../../../public/images/imgs//about/manWhite.png"
import bgYellow from "../../../../public/images/imgs/about/Rectangle 6103.png"
import vectorYellow from "../../../../public/images/imgs/about/Vector (2).png"
import manGreen from "../../../../public/images/imgs//about/manGreen.png"

import "./connectHeader.scss"
import { useEffect, useRef, useState } from "react"

export default function ConnectHeader() {
    const ref = useRef<HTMLDivElement>(null)

    const [windowWidth, setWindowWidth] = useState<number>(0)

    const renderContentTop = () => {
        if (windowWidth <= 390) {
            return (<h1>
                <img src={chicken.src} alt="chicken" />
                Connect
                <img src={vegetable.src} alt="vegetable" />
                peoples with the best foods

            </h1>)
        } else {
            return (
                <h1>
                    <img src={chicken.src} alt="chicken" />
                    Connect peoples
                    <img src={vegetable.src} alt="vegetable" />
                    with the best foods
                </h1>
            )
        }
    }

    useEffect(() => {
        setWindowWidth(Number(ref.current?.clientWidth));
    }, []);

    return (
        <div ref={ref} className='about_header'>
            <div className="container_all">
                <div className="about_content">
                    <div className="content_top">
                        {renderContentTop()}
                    </div>
                    <div className="content_bottom">
                        We enable local businesses to meet consumers’ needs of ease and convenience, and, in turn, generate new ways for people to earn, work, and live.
                    </div>
                </div>
                <div className="about_image">
                    <div className="image_left">
                        <div className="img">
                            <img src={bgGreen.src} alt="bgGreen" className='bgGreen' />
                            <img src={vectorGreen.src} alt="vectorGreen" className='vectorGreen' />
                            <img src={manRed.src} alt="manRed" className='manRed' />
                        </div>
                    </div>
                    <div className="image_mid">
                        <div className="img">
                            <img src={bgBlue.src} alt="bgBlue" className='bgBlue' />
                            <img src={vectorBlue.src} alt="vectorBlue" className='vectorBlue' />
                            <img src={manWhite.src} alt="manWhite" className='manWhite' />
                        </div>
                    </div>
                    <div className="image_right">
                        <div className="img">
                            <img src={bgYellow.src} alt="bgYellow" className='bgYellow' />
                            <img src={vectorYellow.src} alt="vectorYellow" className='vectorYellow' />
                            <img src={manGreen.src} alt="manGreen" className='manGreen' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
