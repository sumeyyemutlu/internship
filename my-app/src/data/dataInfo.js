import collection1 from "../images/collection-icon-1.png";
import collection2 from "../images/collection-icon-2.png";
import collection3 from "../images/collection-icon-3.png";
import collection4 from "../images/collection-icon-4.png";
import collection5 from "../images/collection-icon-5.png";
import collection6 from "../images/collection-icon-6.png";

export const dataInfo = [{
    id:1,
    olculer: ["25x32","25x40","25x42"],
    color: ["red", "blue", "green"],
    img: collection1,
    paketler: [{
        pImg1: collection1,
        price:"1200"
    },
    {
        pImg2: collection2,
        price: "1400"
    }],
    modeller: collection1,
},
{
    id:2,
    olculer: ["25x32","25x40","25x42"],
    color: ["red", "blue", "green","yellow"],
    img: collection2,
    paketler: [{
        pImg1: collection2,
        price:"1200"
    },
    {
        pImg2: collection2,
        price: "1400"
    }],
    modeller: collection2,
},
{
    id:3,
    olculer: ["25x32","25x40","25x42"],
    color: ["red", "blue"],
    img: collection3,
    paketler: [{
        pImg1: collection3,
        price:"1200"
    },
    {
        pImg2: collection1,
        price: "1400"
    }],
    modeller: collection3,
},
{
    id:4,
    olculer: ["25x32","25x40","25x42"],
    color: ["red"],
    img: collection4,
    paketler: [{
        pImg1: collection3,
        price:"1200"
    },
    {
        pImg2: collection4,
        price: "5400"
    }],
    modeller: collection4,
},
{
    id:5,
    olculer: ["25x32","25x40","25x42"],
    color: ["red", "blue", "green","yellow","purple"],
    img: collection5,
    paketler: [{
        pImg1: collection5,
        price:"1200"
    },
    {
        pImg2: collection2,
        price: "1400"
    }],
    modeller: collection5,
},
{
    id:6,
    olculer: ["25x32","25x40","25x42"],
    color: ["red", "blue"],
    img: collection6,
    paketler: [{
        pImg1: collection6,
        price:"1200"
    },
    {
        pImg2: collection4,
        price: "1400"
    }],
    modeller: collection6,
}

]