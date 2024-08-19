import ImageProduct1 from '../../assets/ProductsData/galaxy-s23.webp';
import ImageProduct2 from '../../assets/ProductsData/in-galaxy-s23-black.avif';
import ImageProduct3 from '../../assets/ProductsData/in-galaxy-a35-white.avif';
import ImageProduct4 from '../../assets/ProductsData/in-galaxy-z-fold6.avif';


import ImageProductBuy1 from '../../assets/ProductsData/S23-FE-Color-Buy-1.webp';
import ImageProductBuy2 from '../../assets/ProductsData/product_black-buy2.avif';
import ImageProductBuy3 from '../../assets/ProductsData/A33_720X720_1_buy3.webp';
import ImageProductBuy4 from '../../assets/ProductsData/fold-buy-4.jpg';



const CardStore = [
    {
        id: 1,
        image: ImageProduct1,
        heading: 'Galaxy S23 FE',
        price: 36999.00,
        discription: 'MRP (Inclusive of all taxes) ₹ 79999.00',
        saveMoney: 'Save ₹43000.00',
        info: 'From ₹1793.52/mo for 24 mos at 15% Interest or',
        quantity: 1,
        buyDataMain: ImageProductBuy1,
        buySummery: "SM-S711BLGB",
        StorageInfo: "128GB｜8GBMint"
    },
    {
        id: 2,
        image: ImageProduct2,
        heading: 'Galaxy S23',
        price: 53000.00,
        discription: 'MRP (Inclusive of all taxes) ₹ 71990.00',
        saveMoney: 'Save ₹18990.00',
        info: 'From ₹2569.79/mo for 24 mos at 15% Interest or ',
        quantity: 1,
        buyDataMain: ImageProductBuy2,
        buySummery: "SM-S911BZKC",
        StorageInfo: "256GB｜8GBPhantom Black"

    },
    {
        id: 3,
        image: ImageProduct3,
        heading: 'Galaxy A35 5G (8GB Memory)',
        price: 19250,
        discription: 'MRP (Inclusive of all taxes) ₹ 21500.00',
        saveMoney: 'Save 2250.00',
        info: 'From ₹1933.33/mo for 24 mos at 15% Interest or',
        quantity: 1,
        buyDataMain: ImageProductBuy3,
        // buyDataMain: ImageProductBuy2,
        buySummery: "SM-A356ELBJ",
        StorageInfo: "8GB | 128GB | Awesome Iceblue"

    },
    {
        id: 4,
        image: ImageProduct4,
        heading: 'Galaxy Z Fold6 (Special Edition)',
        price: 41990.00,
        discription: 'MRP (Inclusive of all taxes) ₹ 61000.00',
        saveMoney: 'Save ₹ 19010.00',
        info: 'From ₹2035.95/mo for 24 mos at 15% Interest or',
        quantity: 1,
        buyDataMain: ImageProductBuy4,
        buySummery: "SM-F956BAKD",
        StorageInfo: "12GB | 256GB | Crafted Black",
        
        extraInfo:"₹6874.96/month for 24 months or₹164999.00",
        noCost:"24 month No Cost EMI",
        earn:"Earn up to 2% in rewards",

    },
]

export default CardStore;