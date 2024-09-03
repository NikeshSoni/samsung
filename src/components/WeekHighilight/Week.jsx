import { useState } from "react";

import Ecosystem from "./Ecosystem";
import Appliances from './Appliances';
import New from "./New";
import Highlights from './Mobile.highilights';
import TvInfo from "./TV.highilights";

const Week = () => {

    const storeNew = {
        heading: 'Galaxy Tab S9 FE',
        info: 'Starting ₹ 30999*',
        discription: 'Avail benefits up to ₹ 5000*',
        image: "https://images.samsung.com/is/image/samsung/assets/in/home/Galaxy-Tab-S9-FE_684X684.jpg?$684_684_JPG$"
    }

    const mobileStore = {
        heading: 'Galaxy Tab S9 FE',
        info: 'Starting ₹ 30999*',
        discription: 'Avail benefits up to ₹ 5000*',
        image: "https://images.samsung.com/is/image/samsung/assets/in/home/S24Ultra_Black_fit3_pc.jpg?$684_684_JPG$"
    }

    const tvStore = {
        heading: 'Big TV Days',
        info: 'Get Free Sound Bar worth',
        discription: 'Get Free Sound Bar worth ₹ 79990*',
        image: "https://images.samsung.com/is/image/samsung/assets/in/home/684X684.jpg?$684_684_JPG$"
    }

    const applicationStore = {
        heading: '653 L Convertible 5in1 ',
        discription: 'Starting ₹ 63990*',
        image: "https://images.samsung.com/is/image/samsung/assets/in/home/Big_Tile_684x684_RS76CG8003S9_TL.jpg?$684_684_JPG$"
    }

    const [change, setChange] = useState(<New itemval={storeNew} />);

    return (
        <>
            <div className="mainWapper" >
                <div className="text-center my-5">
                    <h1>This Week’s Highlights</h1>
                </div>

                <div className="d-flex justify-content-center my-2 gap-4">
                    <h6 onClick={() => setChange(<New itemval={storeNew}/>)} >New In</h6>
                    <h6 onClick={() => setChange(<Highlights itemval={mobileStore} />)}>Mobile</h6>
                    <h6 onClick={() => setChange(<TvInfo itemval={tvStore} />)}>Tv</h6>
                    <h6 onClick={() => setChange(<Appliances itemval={applicationStore} />)}>Appliances</h6>
                </div>

                <div>
                    {change}
                </div>
            </div>
        </>
    )
}

export default Week;