import pizzaCut from "../../../../public/images/imgs/home/about/image 39.png";
import leaf from "../../../../public/images/imgs/home/about/leaf.png";
import textFood from "../../../../public/images/imgs/home/about/Food.png";
import textEat from "../../../../public/images/imgs/home/about/eats.png";
import egg from "../../../../public/images/imgs/home/about/egg.png";
import vegetable from "../../../../public/images/imgs/home/about/vegetable.png";
import leaf2 from "../../../../public/images/imgs/home/about/leaf2.png";
import bggreen from "../../../../public/images/imgs/bggreen.png";
import bgyellow from "../../../../public/images/imgs/bgyellow.png";

import "./about.scss";
import Button from "react-bootstrap/esm/Button";

import CountUp from "react-countup";

export default function About() {
  return (
    <div className={`about`}>
      <div className="container_about container_all">
        <div className="count_down">
          <div className="count_item">
            <div className="item">
              <h2>
                <CountUp
                  end={350}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                +
              </h2>
              <p>Order per minute</p>
            </div>
            <div className="item">
              <h2>
                <CountUp end={10} enableScrollSpy={true} scrollSpyOnce={true} />
                x
              </h2>
              <p>Faster delivery</p>
            </div>
            <div className="item">
              <h2>
                <CountUp end={10} enableScrollSpy={true} scrollSpyOnce={true} />
                +
              </h2>
              <p>In Country</p>
            </div>
            <div className="item">
              <h2>
                <CountUp
                  end={99.9}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                %
              </h2>
              <p>Order accuracy</p>
            </div>
            <img src={pizzaCut.src} alt="" className="pizza_cut" />
            <img src={leaf.src} alt="" className="leaf" />
          </div>
        </div>
        <div className="about_food">
          <div className="about_left">
            <img src={bggreen.src} alt="" />
            <img src={bgyellow.src} alt="" />
            <img src={vegetable.src} alt="" />
            <img src={textFood.src} alt="" />
            <img src={textEat.src} alt="" />
            <img src={leaf2.src} alt="" />
            <img src={egg.src} alt="" />
          </div>
          <div className="about_right">
            <h2>About Foodeats</h2>
            <p>
              Foodeats helps you find and order food from wherever you are. How
              it works: you type in an address, we tell you the restaurants that
              deliver to that locale as well as showing you droves of pickup
              restaurants near you.
              <br />
              <br />
              Want to be more specific? Search by cuisine, restaurant name or
              menu item. We'll filter your results accordingly.
            </p>
            <Button type="submit" className="button_submit">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
