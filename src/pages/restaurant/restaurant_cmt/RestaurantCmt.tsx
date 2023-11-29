import "./resCmt.scss"
import "@/styles/reset.css"

import { AiOutlineDown } from "react-icons/ai"

import { RefObject, useRef } from "react"

import { RestaurantData } from "@/interfaces/restaurant"
import ResCmt from "@/component/res_cmt/ResCmt"

import { AiFillStar } from "react-icons/ai"


interface Props {
  restaurant: RestaurantData[]
  size: string
}

export default function RestaurantCmt(props: Props) {
  const elRef = useRef<HTMLDivElement>(null);

  const checkHeight = (value: RefObject<HTMLDivElement>) => {
    if (value?.current) {
      console.log(value.current.style.height)
      const clientHeight = Number(value.current.clientHeight);
      if (clientHeight > 0) {
        value.current.style.height = "0px";
      } else {
        value.current.style.height = value.current.scrollHeight + "px";
      }
    }
  }

  return (
    <div className={`res_cmt ${props.size}`}>
      <div className="res_herder">
        <h4>Customer Review</h4>
        <div className="res_rate">
          <div className="res_review">
            2200 Reviews
          </div>
          <div className="res_star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="res_overall">
            <b>4.6</b> Overall Rating
          </div>
        </div>
      </div>
      <div className="res_mid">
        <div className="res_option">
          <p>Sort By:</p>
          <div className="collapse_right">
            <button className="btn_collapse" onClick={() => checkHeight(elRef)}>
              Most Recent<AiOutlineDown />
            </button>
            <div ref={elRef} className="collapse_item">
              <p>Popular</p>
              <p>Recommended</p>
              <p>Distance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="res_bot">
        <div className="bot_cmt">
          {props.restaurant.map((ele: RestaurantData) => {
            return (
              <ResCmt key={ele.idRes} comment={ele.comment} />
            )
          })}
        </div>
      </div>
      <div className="btn_view">
        <button className="all_review">View All Reviews</button>
      </div>
    </div>
  )

}
