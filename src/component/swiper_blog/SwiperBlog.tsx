import { blogItem } from '@/interfaces/blogItem';
import { formatDate } from '@/utils/moment';
import { SwiperSlide } from 'swiper/react';

interface Props {
    ele: blogItem
}

export default function SwiperBlog(props: Props) {
    return (
        <SwiperSlide>
            <div className='item_blog' key={props.ele.id}>
                <div className="item_top">
                    <img src={props.ele.image.src} alt="" />
                </div>
                <div className="item_bottom">
                    <div className="blog_time">
                        <p className="blt_l">{formatDate(props.ele.DMY)}</p>
                        <div className="separate" />
                        <p className="blt_r">{props.ele.time} min read</p>
                    </div>
                    <div className="blog_title">
                        <h2 className="title">{props.ele.title}</h2>
                    </div>
                    <div className="blog_description">
                        {props.ele.des}
                    </div>
                    <div className="blog_poster">
                        <div className="img_poster">
                            <img src={props.ele.avatar.src} alt="" />
                        </div>
                        <div className="name_poster">{props.ele.name}</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}
