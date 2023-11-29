import Vector from "../../../../public/images/imgs/Vector.png"
import phone60 from "../../../../public/images/imgs/home/cta/image 60.png"
import phone61 from "../../../../public/images/imgs/home/cta/image 61.png"
import phone62 from "../../../../public/images/imgs/home/cta/image 62.png"
import apple from "../../../../public/images/icons/Apple logo.png"
import google from "../../../../public/images/icons/Google Play logo.png"

import { GrStar } from "react-icons/gr"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/style.scss';
import { Pagination } from 'swiper/modules';

import "./cta.scss"

export default function Cta() {
    return (
        <div className={`cta`}>
            <div className="container_cta">
                <div className="cta_top">
                    <div className="container_all">
                        <div className="img">
                            <img src={Vector.src} alt="" />
                            <img src={Vector.src} alt="" />
                        </div>
                        <div className="text">
                            <h2>Find your flavour even faster</h2>
                            <p>Download the Just Eat app for faster ordering and more personalised recommendations.</p>
                        </div>

                        <div className="phone">
                            <img src={phone60.src} alt="" />
                            <img src={phone62.src} alt="" />
                            <img src={phone61.src} alt="" />
                        </div>
                    </div>
                </div>
                <div className="cta_bottom">
                    <div className="container_all">
                        <div className="cta_app">
                            <div className="app_left">
                                <div className="google">
                                    <img src={google.src} alt="" />
                                </div>
                                <div className="title">
                                    <p>GET IT ON</p>
                                    <h4>Google Play</h4>
                                </div>
                            </div>
                            <div className="app_right">
                                <div className="google">
                                    <img src={apple.src} alt="" />
                                </div>
                                <div className="title">
                                    <p>Download on the</p>
                                    <h4>App Store</h4>
                                </div>
                            </div>
                        </div>
                        <div className="cta_about">
                            <div className="about_top">
                                <h2>What food lovers are saying about us</h2>
                            </div>
                            <div className="about_bottom">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={
                                        {
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 50,
                                            },

                                            1336: {
                                                slidesPerView: 3,
                                                spaceBetween: 50,
                                            }


                                        }
                                    }
                                    modules={[Pagination]}
                                    className={`mySwiper`}
                                >
                                    <SwiperSlide >
                                        <div style={{ marginLeft: 20, marginTop: 30, marginRight: 20 }}>
                                            <div className="star">
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                            </div>
                                            <p>I’m obsessed with excellent customer service...thanks foodeats for being awesome!  </p>
                                            <div className="border_swiper"></div>
                                            <h6>Peter Moor</h6>
                                            <p className="last_text">UI/UX Designer</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ marginLeft: 20, marginTop: 30, marginRight: 20 }}>
                                            <div className="star">
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                            </div>
                                            <p>I’m obsessed with excellent customer service...thanks foodeats for being awesome!  </p>
                                            <div className="border_swiper"></div>
                                            <h6>Peter Moor</h6>
                                            <p className="last_text">UI/UX Designer</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ marginLeft: 20, marginTop: 30, marginRight: 20 }}>
                                            <div className="star">
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                            </div>
                                            <p>I’m obsessed with excellent customer service...thanks foodeats for being awesome!  </p>
                                            <div className="border_swiper"></div>
                                            <h6>Peter Moor</h6>
                                            <p className="last_text">UI/UX Designer</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ marginLeft: 20, marginTop: 30, marginRight: 20 }}>
                                            <div className="star">
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                            </div>
                                            <p>I’m obsessed with excellent customer service...thanks foodeats for being awesome!  </p>
                                            <div className="border_swiper"></div>
                                            <h6>Peter Moor</h6>
                                            <p className="last_text">UI/UX Designer</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div style={{ marginLeft: 20, marginTop: 30, marginRight: 20 }}>
                                            <div className="star">
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                                <GrStar className="star_item" />
                                            </div>
                                            <p>I’m obsessed with excellent customer service...thanks foodeats for being awesome!  </p>
                                            <div className="border_swiper"></div>
                                            <h6>Peter Moor</h6>
                                            <p className="last_text">UI/UX Designer</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}