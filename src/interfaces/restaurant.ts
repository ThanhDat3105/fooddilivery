import { StaticImageData } from "next/image"

export interface MenuItem {
    id: number;
    name: string;
    desc: string;
    price: number;
    img: StaticImageData;
}

export interface RestaurantCategory {
    title: string
    menu: MenuItem[];
}

export interface Comment {
    cmtId: number;
    star: number;
    name: string;
    job: string;
    content: string;
}

export interface RestaurantData {
    idRes: number;
    restaurant: string;
    type: string;
    delivery: number;
    time: number;
    rate: number;
    assessor: number;
    price: number;
    good: number;
    deliTime: number;
    orderCorrect: number;
    popular: RestaurantCategory;
    cheese: RestaurantCategory;
    chicken: RestaurantCategory;
    comment: Comment[];
}
