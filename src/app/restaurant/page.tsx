"use client";

import MenuLeft from "@/pages/menu/menu_left/MenuLeft";
import "./menu.scss";

import { menuData } from "@/data/menu";
import { useEffect, useRef, useState } from "react";
import { MenuInterface } from "@/interfaces/menu";
import { CategoryInterface } from "@/interfaces/category";
import MenuRight from "@/pages/menu/menu_right/MenuRight";

import "@/app/globals.css";

export default function Result() {
  const elRef = useRef<HTMLDivElement>(null);
  const [eventFirst, setEventFirst] =
    useState<React.MouseEvent<HTMLInputElement>>(); 
  const [filterMenu, setFilterMenu] = useState<MenuInterface[]>(menuData);
  const [previousValue, setPreviousValue] = useState<number | string>();
  const [category, setCategory] = useState<CategoryInterface>();
  const [size, setSize] = useState<string>("desktop");
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const valueFilter = event.currentTarget.value;
    setPreviousValue(valueFilter);

    if (event.currentTarget.name === "Price") {
      if (previousValue === valueFilter) {
        setFilterMenu(menuData);
        setPreviousValue("");
      } else if (event !== eventFirst) {
        handlePrice(filterMenu, parseInt(valueFilter));
      } else {
        setEventFirst(event);
        handlePrice(menuData, parseInt(valueFilter));
      }
    } else if (event.currentTarget.name === "Foodeats") {
      if (previousValue === valueFilter) {
        setFilterMenu(menuData);
        setPreviousValue("");
      } else if (event !== eventFirst) {
        handleFood(filterMenu, valueFilter);
      } else {
        setEventFirst(event);
        handleFood(menuData, valueFilter);
      }
    } else if (event.currentTarget.name === "Delivery") {
      if (previousValue === valueFilter) {
        setFilterMenu(menuData);
        setPreviousValue("");
      } else if (event !== eventFirst) {
        handleDelivery(filterMenu, parseInt(valueFilter));
      } else {
        setEventFirst(event);
        handleDelivery(menuData, parseInt(valueFilter));
      }
    } else if (event.currentTarget.name === "rating") {
      if (previousValue === valueFilter) {
        setFilterMenu(menuData);
        setPreviousValue("");
      } else if (event !== eventFirst) {
        handleRating(filterMenu, parseInt(valueFilter));
      } else {
        setEventFirst(event);
        handleRating(menuData, parseInt(valueFilter));
      }
    } else if (event.currentTarget.name === "Time") {
      if (previousValue === valueFilter) {
        setFilterMenu(menuData);
        setPreviousValue("");
      } else if (event !== eventFirst) {
        handleTime(filterMenu, parseInt(valueFilter));
      } else {
        setEventFirst(event);
        handleTime(menuData, parseInt(valueFilter));
      }
    }
  };

  const handlePrice = (data: MenuInterface[], valueFilter: number) => {
    console.log(valueFilter);
    const menuFilter = data.filter((e) => {
      if (e.price <= valueFilter && e.price > valueFilter - 10) {
        return e;
      }
    });
    setFilterMenu(menuFilter);
  };

  const handleFood = (data: MenuInterface[], valueFilter: string) => {
    const menuFilter = data.filter((e) => {
      if (valueFilter === "Special") {
        return e.assessor >= 1000;
      } else {
        return e.rate >= 4;
      }
    });
    setFilterMenu(menuFilter);
  };

  const handleDelivery = (data: MenuInterface[], valueFilter: number) => {
    const menuFilter = data.filter((e) => {
      if (e.delivery <= valueFilter && e.delivery >= valueFilter - 3) {
        return e;
      }
    });
    setFilterMenu(menuFilter);
  };

  const handleRating = (data: MenuInterface[], valueFilter: number) => {
    const menuFilter = data.filter((e) => {
      if (e.rate >= valueFilter && e.rate <= valueFilter + 1) return e;
    });
    setFilterMenu(menuFilter);
  };

  const handleTime = (data: MenuInterface[], valueFilter: number) => {
    const menuFilter = data.filter((e) => {
      if (e.time >= valueFilter && e.time < valueFilter + 15) {
        return e;
      } else if (valueFilter === 0) {
        return e;
      }
    });
    setFilterMenu(menuFilter);
  };

  useEffect(() => {
    if (category) {
      filterItem();
    }
  }, [category]);

  useEffect(() => {
    const width = elRef.current?.clientWidth;
    if (width) {
      if (width <= 428) {
        setSize("mobile");
      } else if (width <= 1024) {
        setSize("tablet");
      } else if (width <= 1500) {
        setOpenFilter(true);
      } else if (width > 1500) {
        setOpenFilter(true);
      }
    }
  }, [elRef.current?.clientWidth]);

  const filterItem = () => {
    const menuFilter = menuData.filter((e) => {
      if (e.type === category?.type) {
        return e;
      }
    });
    setFilterMenu(menuFilter);
  };

  return (
    <div ref={elRef} className={`menu`}>
      <div className="container_menu container_all">
        <MenuLeft
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
          size={size}
          handleClick={handleClick}
        />
        <MenuRight
          size={size}
          filterMenu={filterMenu}
          setCategory={setCategory}
          setOpenFilter={setOpenFilter}
          openFilter={openFilter}
        />
      </div>
    </div>
  );
}
