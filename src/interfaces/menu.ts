import { StaticImageData } from "next/image";

export interface MenuInterface {
    id: number;
    image: StaticImageData;
    name: string;
    type: string;
    delivery: number;
    time: number;
    rate: number;
    assessor: number;
    price: number;
}