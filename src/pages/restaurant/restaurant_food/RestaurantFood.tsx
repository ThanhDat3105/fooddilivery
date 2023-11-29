import ResCard from "@/component/res_card/ResCard"

import "../../../styles/reset.css"
import "./resFood.scss"
import { RestaurantData } from "@/interfaces/restaurant"

interface Props {
  restaurant: RestaurantData[]
  size: string
}

export default function RestaurantFood(props: Props) {
  return (
    props.restaurant.map((ele: RestaurantData) => {
      return (
        <div key={ele.idRes} className={`res_food ${props.size}`}>
          <h4>Food Menu</h4>
          <div className="res_category">
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>
            <div className="name_category">
              <p>name</p>
            </div>

          </div>
          <div className="popular_menu">
            <div className="title">
              <h4>{ele.popular.title}</h4>
            </div>
            <div className="list_card">
              <ResCard ele={ele.popular.menu} />
            </div>
          </div>
          <div className="cheese_menu">
            <div className="title">
              <h4>{ele.cheese.title}</h4>
            </div>
            <div className="list_card">
              <ResCard ele={ele.cheese.menu} />
            </div>
          </div>
          <div className="chicken_menu">
            <div className="title">
              <h4>{ele.chicken.title}</h4>
            </div>
            <div className="list_card">
              <ResCard ele={ele.chicken.menu} />
            </div>
          </div>
        </div>
      )
    })
  )
}
