import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

import "./left.scss";

import Collapse from "@/component/collapse";
interface Props {
  setOpenFilter: (value: boolean) => void;
  openFilter: boolean;
  size: string;
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export default function MenuLeft(props: Props) {
  return (
    <div
      className={`menu_left ${props.size} ${props.openFilter ? "show" : ""}`}
    >
      <div className="filter">
        <div className="filter_top">
          <div className="title">
            <h5>Filters</h5>
            <p>Clear All</p>
            {props.size === "mobile" || props.size === "tablet" ? (
              <button
                onClick={() => props.setOpenFilter(false)}
                className="btn_close"
              >
                <AiOutlineClose />
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="catering">
            <h5 className="catering_title">Restaurants</h5>
            <h5>Catering</h5>
          </div>
          <div className="button">
            <Button type="submit" className="button_submit ">
              Delivery
            </Button>
            <Button type="submit" className="button_submit ">
              Pickup
            </Button>
          </div>
          <div className="deliver">
            <p>Deliver my food</p>
            <GoDotFill className="dot" />
            <p>Today,ASAP</p>
          </div>
        </div>
        <div className="filter_bottom">
          <div className="food_eat">
            <Collapse title={"FoodEats"}>
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 1"
                label="Special Deals"
                name="Foodeats"
                value="Special"
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 2"
                label="Top Eats"
                name="Foodeats"
                value="Top"
                type="radio"
              />
            </Collapse>
          </div>
          <div className="border"></div>
          <div className="price">
            <Collapse title={"Price"}>
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 1"
                label="$0-$10"
                name="Price"
                value={10}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 2"
                label="$10-$20"
                name="Price"
                value={20}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 3"
                label="$20-$30"
                name="Price"
                value={30}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 4"
                label="$30-$40"
                name="Price"
                value={40}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 5"
                label="$40-$50"
                name="Price"
                value={50}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 6"
                label="$50-$100"
                name="Price"
                value={100}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 7"
                label="$100-$100+"
                name="Price"
                value={200}
                type="radio"
              />
            </Collapse>
          </div>
          <div className="border"></div>
          <div className="delivery_fee">
            <Collapse title={"Max Delivery Fee"}>
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 1"
                label="$0-$3"
                name="Delivery"
                value={3}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 2"
                label="$3-$6"
                name="Delivery"
                value={6}
                type="radio"
              />
              <Form.Check
                onClick={(event) => props.handleClick(event)}
                aria-label="option 3"
                label="$6-$9+"
                name="Delivery"
                value={9}
                type="radio"
              />
            </Collapse>
          </div>
          <div className="border"></div>
          <div className="rating">
            <Collapse title={"Rating"}>
              <div className="option1 rating_item">
                <div className="rating_label">
                  <input
                    onClick={(event) => props.handleClick(event)}
                    type="radio"
                    value={1}
                    name="rating"
                    id="check1"
                  />
                  <label htmlFor="check1">1.0</label>
                </div>
                <div className="star">
                  <AiFillStar className="star_item" />
                </div>
              </div>
              <div className="option2 rating_item">
                <div className="rating_label">
                  <input
                    onClick={(event) => props.handleClick(event)}
                    type="radio"
                    value={2}
                    name="rating"
                    id="check2"
                  />
                  <label htmlFor="check2">2.0</label>
                </div>
                <div className="star">
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                </div>
              </div>
              <div className="option3 rating_item">
                <div className="rating_label">
                  <input
                    onClick={(event) => props.handleClick(event)}
                    type="radio"
                    value={3}
                    name="rating"
                    id="check3"
                  />
                  <label htmlFor="check3">3.0</label>
                </div>
                <div className="star">
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                </div>
              </div>
              <div className="option4 rating_item">
                <div className="rating_label">
                  <input
                    onClick={(event) => props.handleClick(event)}
                    type="radio"
                    value={4}
                    name="rating"
                    id="check4"
                  />
                  <label htmlFor="check4">4.0</label>
                </div>
                <div className="star">
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                </div>
              </div>
              <div className="option5 rating_item">
                <div className="rating_label">
                  <input
                    onClick={(event) => props.handleClick(event)}
                    type="radio"
                    value={5}
                    name="rating"
                    id="check5"
                  />
                  <label htmlFor="check5">5.0</label>
                </div>
                <div className="star">
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                  <AiFillStar className="star_item" />
                </div>
              </div>
            </Collapse>
          </div>
          <div className="border"></div>
          <Collapse title={"Delivery Time"}>
            <Form.Check
              onClick={(event) => props.handleClick(event)}
              aria-label="option 2"
              label="Anytime"
              name="Time"
              value={0}
              type="radio"
            />
            <Form.Check
              onClick={(event) => props.handleClick(event)}
              aria-label="option 3"
              label="15 min"
              name="Time"
              value={15}
              type="radio"
            />
            <Form.Check
              onClick={(event) => props.handleClick(event)}
              aria-label="option 4"
              label="30 min"
              name="Time"
              value={30}
              type="radio"
            />
            <Form.Check
              onClick={(event) => props.handleClick(event)}
              aria-label="option 5"
              label="45 min"
              name="Time"
              value={45}
              type="radio"
            />
            <Form.Check
              onClick={(event) => props.handleClick(event)}
              aria-label="option 1"
              label="60 min"
              name="Time"
              value={60}
              type="radio"
            />
          </Collapse>
        </div>
      </div>
    </div>
  );
}
