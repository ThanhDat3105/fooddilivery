import "./connectBody.scss"

import bgGreen from "../../../../public/images/imgs/connect/body/bgGreen.png"
import bgYellow from "../../../../public/images/imgs/connect/body/bgYellow.png"
import food from "../../../../public/images/imgs/connect/body/food.png"
import orange from "../../../../public/images/imgs/connect/body/orange.png"

export default function ConnectBody() {
  return (
    <div className="about_body">
      <div className="container_all">
        <div className="our_top">
          <div className="story_left">
            <div className="img">
              <img src={bgYellow.src} alt="bgYellow" className="bgYellow" />
              <img src={food.src} alt="food" className="food" />
            </div>
          </div>
          <div className="story_right">
            <h2>Our story.</h2>
            <p>Just Eat Take​away​.com is a lead­ing glob­al online food deliv­ery mar­ket­place, con­nect­ing con­sumers with over 680,000 con­nect­ed part­ners through its plat­form. We offer an online mar­ket­place where sup­ply and demand for food deliv­ery and order­ing meet.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="our_bottom">
          <div className="mission_left">
            <h2>Our Mission</h2>
            <p>Just Eat Take​away​.com is a lead­ing glob­al online food deliv­ery mar­ket­place, con­nect­ing con­sumers with over 680,000 con­nect­ed part­ners through its plat­form. We offer an online mar­ket­place where sup­ply and demand for food deliv­ery and order­ing meet.</p>
            <button>Learn More</button>
          </div>
          <div className="mission_right">
            <div className="img">
              <img src={bgGreen.src} alt="bgGreen" />
              <img src={orange.src} alt="orange" className="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
