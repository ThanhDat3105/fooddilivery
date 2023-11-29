import { StaticImageData } from "next/image";

export interface CategoryInterface {
    id: number;
    image: StaticImageData;
    name: string;
    type: string
}