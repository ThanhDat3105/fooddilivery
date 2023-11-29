import { StaticImageData } from "next/image";

export interface blogItem {
    id: number;
    image: StaticImageData;
    DMY: Date;
    time: number;
    title: string;
    des: string;
    avatar: StaticImageData;
    name: string;
}