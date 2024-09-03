import { createContext } from 'react';
import StoreNewIn from './StoreHighiligts/Index';

import ReuseComponents from './ReuseComponent';
const New = (props) => {
    const {itemval } = props;

    // console.log(props.itemsdata);

    const storeNewIn = [
        {
            title: 'Galaxy F55 5G',
            price: 'Starting ₹ 24999*',
            img: 'https://images.samsung.com/is/image/samsung/assets/in/home/F55_330X330.jpg?$330_330_JPG$'
        },
        {
            title: 'Galaxy Book4',
            price: 'Starting ₹ 60990*',
            img: 'https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-NP750XGJ-KG1IN.jpg?$330_330_JPG$'

        },
        {
            title: ' 650 L 4 Door Convertible',
            price: 'Starting ₹ 175900*',
            img: 'https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$'

        },
        {
            title: ' 1.08 m (43) Crystal UHD',
            price: 'Starting ₹ 30516*',
            img: 'https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-UA50DUE70BKLXL.jpg?$330_330_JPG$'
        },
    ]

    return (
        <>
            <div className="p-1 p-md-2 p-lg-3" data-aos="fade-left">
                <div className="row d-flex">
                    <div className="col-12 text-center mb-3 mb-lg-0 mx-auto col-lg-6">
                        <div className="position-relative">
                            <div className="mainGrid mt-2 text-center">
                                <h4>{itemval.heading}</h4>
                                <h4>{itemval.info}</h4>
                                <p className="">{itemval.discription}</p>
                                <button type="button" className="btn btn-info mx-auto d-none d-md-block">Buy now</button>
                            </div>
                            <img
                                className="img-fluid  rounded-3"
                                src={itemval.image}
                              />
                        </div>
                    </div>
                    <div className="col-12 mx-auto justify-content-center col-lg-6 text-center row">
                    <div className="row flex-wrap">
                        <ReuseComponents itemsdata={StoreNewIn} />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default New