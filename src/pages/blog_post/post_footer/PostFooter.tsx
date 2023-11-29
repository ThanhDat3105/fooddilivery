import "./postFooter.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/style.scss';
import { Pagination } from 'swiper/modules';
import { blogData } from "@/data/blog";
import { blogItem } from "@/interfaces/blogItem";
import { formatDate } from "@/utils/moment";

export default function PostFooter() {
    return (
        <div className="post_footer">
            <div className="container_all">
                <div className="title_footer">
                    <h2>Read similar blog</h2>
                </div>
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
                    className={`blogSwiper`}
                >
                    {blogData.map((ele: blogItem) => {
                        return <SwiperSlide key={ele.id}>
                            <div className='item_blog' key={ele.id}>
                                <div className="item_top">
                                    <img src={ele.image.src} alt="" />
                                </div>
                                <div className="item_bottom">
                                    <div className="blog_time">
                                        <p className="blt_l">{formatDate(ele.DMY)}</p>
                                        <div className="separate" />
                                        <p className="blt_r">{ele.time} min read</p>
                                    </div>
                                    <div className="blog_title">
                                        <h2 className="title">{ele.title}</h2>
                                    </div>
                                    <div className="blog_description">
                                        {ele.des}
                                    </div>
                                    <div className="blog_poster">
                                        <div className="img_poster">
                                            <img src={ele.avatar.src} alt="" />
                                        </div>
                                        <div className="name_poster">{ele.name}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}
