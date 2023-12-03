`use client`;

import { MenuInterface } from "@/interfaces/menu";
import { AiFillStar } from "react-icons/ai";

import "./cardMenu.scss";
import { useRouter } from "next/navigation";

interface Props {
  menuData: MenuInterface;
}

export default function CardMenu(props: Props) {
  const { assessor, delivery, id, image, name, rate, time, type } =
    props.menuData;

  const restaurantName = name.toLowerCase().replace(/\s/g, "-");
  const router = useRouter();
  return (
    <div className="card_container">
      <div
        className="card_menu"
        onClick={() => router.push(`/restaurant/${restaurantName}?idRes=${id}`)}
      >
        <div className="card_top">
          <img src={image.src} alt="img" />
        </div>
        <div className="card_bottom">
          <h5 className="name">{name}</h5>
          <p className="delivery">${delivery} delivery fee</p>
          <div className="timeAndType">
            <div className="time">
              <p>Time: </p>
              <p>{time} min</p>
            </div>
            <div className="border_mid"></div>
            <div className="type">
              <p>Food Type: </p>
              <p>{type}</p>
            </div>
          </div>
          <div className="rateAndAssessor">
            <div className="rate">
              <p>{rate} </p>
            </div>
            <AiFillStar className="star_item" />
            <div className="assessor">
              <p>{`(${assessor})`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
