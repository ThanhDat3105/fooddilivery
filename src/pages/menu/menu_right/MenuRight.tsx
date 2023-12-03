import Category from "@/component/category/Category";
import { categoryData } from "@/data/categories";
import CardMenu from "@/component/card_menu/CardMenu";

import { AiOutlineDown } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { MenuInterface } from "@/interfaces/menu";
import { CategoryInterface } from "@/interfaces/category";

import "./right.scss";
import { RefObject, useRef } from "react";

interface Props {
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
  filterMenu: MenuInterface[];
  setCategory: (value: CategoryInterface) => void;
  size: string;
}

export default function MenuRight(props: Props) {
  const elRef = useRef<HTMLDivElement>(null);

  const checkHeight = (value: RefObject<HTMLDivElement>) => {
    if (value?.current) {
      console.log(value.current.style.height);
      const clientHeight = Number(value.current.clientHeight);
      if (clientHeight > 0) {
        value.current.style.height = "0px";
      } else {
        value.current.style.height = value.current.scrollHeight + "px";
      }
    }
  };

  return (
    <>
      {(props.size === "mobile" && props.openFilter) ||
      (props.size === "tablet" && props.openFilter) ? (
        <div
          onClick={() => props.setOpenFilter(false)}
          className="overplay"
        ></div>
      ) : (
        ""
      )}
      <div className={`menu_right ${props.size}`}>
        <div className="right_top">
          <div className="header_right">
            <h5>Explore by category</h5>
            <p>View All</p>
          </div>
          <div className="category">
            {categoryData.map((category) => {
              return (
                <Category
                  key={category.id}
                  category={category}
                  setCategory={props.setCategory}
                  size={props.size}
                />
              );
            })}
          </div>
        </div>
        <div className="border"></div>
        <div className="right_mid">
          <div className="text">
            <h5>120 Restaurants Near Austin, TX</h5>
          </div>
          <div className="option">
            {props.size === "desktop" ? (
              <p>Sort By:</p>
            ) : (
              <button
                className="btn_collapse"
                onClick={() => props.setOpenFilter(!props.openFilter)}
              >
                <BiMenuAltLeft />
              </button>
            )}
            <div className="collapse_right">
              <button
                className="btn_collapse"
                onClick={() => checkHeight(elRef)}
              >
                {props.size === "desktop" ? "Popular" : ""}
                <AiOutlineDown />
              </button>
              <div ref={elRef} className="collapse_item">
                <p>Popular</p>
                <p>Recommended</p>
                <p>Distance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right_bottom">
          {props.filterMenu.length !== 0 ? (
            props.filterMenu
              .slice(0, 9)
              .map((menuData) => (
                <CardMenu key={menuData.id} menuData={menuData} />
              ))
          ) : (
            <div className="data_none"></div>
          )}
        </div>
      </div>
    </>
  );
}
