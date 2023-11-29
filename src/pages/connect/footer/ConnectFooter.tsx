import { GrStar } from "react-icons/gr"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/style.scss';
import "./connectFooter.scss"
import "@/styles/reset.css"
import "@/app/globals.css"
import { Pagination } from 'swiper/modules';

import CountUp from 'react-countup';

import pizzaCut from "../../../../public/images/imgs/home/about/image 39.png"
import leaf from "../../../../public/images/imgs/home/about/leaf.png"

export default function ConnectFooter() {
    return (
        <div className="connect_about">
            <div className="container_all">
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
                        </SwiperSlide><SwiperSlide>
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
                        </SwiperSlide><SwiperSlide>
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
                        </SwiperSlide><SwiperSlide>
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
                <div className="count_down">
                    <div className="count_item">
                        <div className="item">
                            <h2><CountUp end={350} enableScrollSpy={true} scrollSpyOnce={true} />+</h2>
                            <p>Order per minute</p>
                        </div>
                        <div className="item">
                            <h2><CountUp end={10} enableScrollSpy={true} scrollSpyOnce={true} />x</h2>
                            <p>Faster delivery</p>
                        </div>
                        <div className="item">
                            <h2><CountUp end={10} enableScrollSpy={true} scrollSpyOnce={true} />+</h2>
                            <p>In Country</p>
                        </div>
                        <div className="item">
                            <h2><CountUp end={99.9} enableScrollSpy={true} scrollSpyOnce={true} />%</h2>
                            <p>Order accuracy</p>
                        </div>
                        <img src={pizzaCut.src} alt="" className="pizza_cut" />
                        <img src={leaf.src} alt="" className="leaf" />
                    </div>
                </div>
            </div>
        </div>
    )
}
