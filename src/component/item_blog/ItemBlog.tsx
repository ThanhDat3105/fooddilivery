import "./itemBlog.scss"
import { blogItem } from "@/interfaces/blogItem"
import { formatDate } from "@/utils/moment"

interface Props {
  ele: blogItem[]
}

export default function ItemBlog(props: Props) {
  return (
    props.ele.map((ele: blogItem) => {
      return <div className='item_blog' key={ele.id}>
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
    })
  )
}
