import { MenuItem } from "@/interfaces/restaurant";
import { FaShoppingCart } from "react-icons/fa";
import { addInfoCard } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter as useNavigation } from "next/navigation";

interface Props {
  idRes: number;
  nameRes: string;
  ele: MenuItem[];
}

export default function ResCard(props: Props) {
  const dispatch = useDispatch();
  const router = useNavigation();

  return props.ele.map((ele: MenuItem) => {
    return (
      <div key={ele.id}>
        <div
          className="card_item"
          onClick={() => {
            dispatch(addInfoCard(ele));
            router.push(
              `/restaurant/${props.nameRes}/${props.idRes}?id=${ele.id}`
            );
          }}
        >
          <div className="card_top">
            <img src={ele.img.src} alt="image burger" />
          </div>
          <div className="card_bottom">
            <h5>{ele.name}</h5>
            <p>{ele.desc}</p>
            <div className="sell">
              <div className="price">${ele.price}</div>
              <div className="card">
                <FaShoppingCart className="card_shop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
