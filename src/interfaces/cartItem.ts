import { StaticImageData } from "next/image";

export interface cartItem {
    id: number;
    name: string;
    desc: string;
    price: number;
    img: StaticImageData;
    quantity: number;
}