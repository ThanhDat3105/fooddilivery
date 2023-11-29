import food from "../../../../public/images/imgs/food.png"
import groceries from "../../../../public/images/imgs/groceries.png"
import flower from "../../../../public/images/imgs/flower.png"
import "./explore.scss"

export default function Explore() {
    return (
        <div className={`explore`}>
            <div className="container_explore container_all">
                <div className="explore_all">
                    <div className="explore_header">
                        <h2>Your everyday, right away</h2>
                        <p>Order food and grocery delivery online from hundreds of restaurants and shops nearby.</p>
                    </div>
                    <div className="explore_item">
                        <div className="item">
                            <img src={food.src} alt="" />
                            <h4>Food Items</h4>
                            <p>Find deals, free delivery, and more from our restaurant partners.</p>
                            <p>Explore</p>
                        </div>
                        <div className="item groceries">
                            <img src={groceries.src} alt="" />
                            <h4>Groceries</h4>
                            <p>Find deals, free delivery, and more from our restaurant partners.</p>
                            <p>Explore</p>
                        </div>
                        <div className="item">
                            <img src={flower.src} alt="" />
                            <h4>Flower Items</h4>
                            <p>Find deals, free delivery, and more from our restaurant partners.</p>
                            <p>Explore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}