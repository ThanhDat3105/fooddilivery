'use client'

import RestaurantHeader from "@/pages/restaurant/restaurant_header/RestaurantHeader"
import RestaurantFood from "@/pages/restaurant/restaurant_food/RestaurantFood"
import RestaurantAddress from "@/pages/restaurant/restaurant_address/RestaurantAddress"
import RestaurantCmt from "@/pages/restaurant/restaurant_cmt/RestaurantCmt"
import RestaurantMenu from "@/pages/restaurant/restaurant_menu/RestaurantMenu"

import "@/app/globals.css"
import "@/styles/reset.css"

import { restaurant } from "@/data/restaurant"

import { DESKTOP, IPAD_PRO, MOBILE, TABLET } from "@/constants";
import { withViewport } from "@/HOCs/withViewport";
import { useEffect, useState } from "react"

interface Props {
  device: any;
}

function page(props: Props) {
  const [size, setSize] = useState<string>("desktop")

  useEffect(() => {
    if (props.device) {
      if (props.device === "MOBILE") {
        setSize("mobile")
      } else if (props.device === "TABLET") {
        setSize("tablet")
      } else if (props.device === "IPAD_PRO") {
        setSize("ipad_pro")
      }
    }
  }, [props.device])

  return (
    <div className={`restaurant ${props.device === MOBILE && "mobile"} ${props.device === TABLET && "tablet"} ${props.device === IPAD_PRO && "ipad_pro"} ${props.device === DESKTOP && "desktop"}`}>
      <div className="container_all">
        <RestaurantHeader restaurant={restaurant} size={size} />
        <RestaurantMenu />
        <RestaurantFood restaurant={restaurant} size={size} />
        <RestaurantAddress size={size} />
        <RestaurantCmt size={size} restaurant={restaurant} />
      </div>
    </div>
  )
}

export default withViewport(page)