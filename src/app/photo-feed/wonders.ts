import { StaticImageData } from "next/image";

import photo1 from "./photos/1.jpg"
import photo2 from "./photos/2.jpg"
import photo3 from "./photos/3.jpg"
import photo4 from "./photos/4.jpg"
import photo5 from "./photos/5.jpg"
import photo6 from "./photos/6.jpg"
import photo7 from "./photos/7.jpg"

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    religion: string;
    country: string;
}

const wondersImages: WonderImage[] = [

    {
        id: "1",
        name: "Karan Aujla",
        src: photo1,
        religion: "Sikh",
        country: "Canada"
    },

    {
        id: "2",
        name: "AP Dhillon",
        src: photo2,
        religion: "Sikh",
        country: "Canada"
    },

    {
        id: "3",
        name: "Diljit Dosanjh",
        src: photo3,
        religion: "Sikh",
        country: "Canada"
    },

    {
        id: "4",
        name: "DIVINE",
        src: photo4,
        religion: "Hindu",
        country: "India"
    },

    {
        id: "5",
        name: "Shubhpreet Singh",
        src: photo5,
        religion: "Sikh",
        country: "Canada"
    },

    {
        id: "6",
        name: "Talwinder",
        src: photo6,
        religion: "Hindu",
        country: "India"
    },

    {
        id: "1",
        name: "Kr$na",
        src: photo7,
        religion: "Hindu",
        country: "India"
    },


];

export default wondersImages;