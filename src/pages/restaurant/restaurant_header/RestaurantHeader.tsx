import banner from "../../../../public/images/imgs/restaurant/header/Rectangle48.png"
import avatar from "../../../../public/images/imgs/restaurant/header/Ellipse 1170.png"

import "./restaurantHeader.scss"
import "@/styles/reset.css"

import { AiFillStar, AiOutlineExclamationCircle, AiFillHeart } from "react-icons/ai"
import { RestaurantData } from "@/interfaces/restaurant"

interface Props {
  restaurant: RestaurantData[]
  size: string
}

export default function RestaurantHeader(props: Props) {
  return (
    props.restaurant.map((ele: RestaurantData) => {
      return (
        <div key={ele.idRes} className={`res_header ${props.size}`}>
          <div className="res_top">
            <div className="img">
              <img src={banner.src} alt="banner" />
            </div>
            <div className="logo">
              <img src={avatar.src} alt="" />
            </div>
          </div>
          <div className="res_bottom">
            <div className="res_left">
              <h2>{ele.restaurant}</h2>
              <div className="info_left">
                <div className="delivery">
                  <p><b>${ele.delivery} </b>delivery fee</p>
                </div>
                <div className="border_mid"></div>
                <div className="time">
                  <p>Time: <b>{ele.time}</b></p>
                </div>
                <div className="border_mid"></div>
                <div className="type">
                  <p>Food Type: <b>{ele.type}</b></p>
                </div>
              </div>
              <div className="rate_left">
                <div className="rate_star">
                  <p><b>{ele.rate}</b> <AiFillStar className="star_item" /> (2200)</p>
                </div>
                <div className="border_mid"></div>
                <div className="rate_good">
                  <p><b>{ele.good}</b> Food was good</p>
                </div>
                <div className="border_mid"></div>
                <div className="rate_time">
                  <p><b>{ele.deliTime}</b> Delivery on time</p>
                </div>
                <div className="border_mid"></div>
                <div className="rate_correct">
                  <p><b>{ele.orderCorrect}</b> Order was correct</p>
                </div>
              </div>
            </div>
            <div className="res_right">
              <div className="store_info">
                <AiOutlineExclamationCircle className="exclamation" />
                <p>Store info</p>
              </div>
              <div className="favorite">
                <AiFillHeart />
                <p>Add to favorites</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}
