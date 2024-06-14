import { useState } from "react";

import Ecosystem from "./Ecosystem";
import Appliances from './Appliances';
import New from "./New";
import Highlights from './Mobile.highilights';
import TvInfo from "./TV.highilights";



const Week = () => {

    const [change , setChange] = useState(<New />);

     return(
        <>
            <div className="mainWapper">
                <div className="text-center my-5">
                     <h1>This Week’s Highlights</h1>
                </div>

                <div className="d-flex justify-content-center my-4 gap-4">
                     <p className="active" aria-current="true" onClick={ () => setChange(<New />) }>New In</p>
                     <p onClick={ () => setChange(<Highlights />) }>Mobile</p>
                     <p onClick={ () => setChange(<TvInfo />) }>Tv</p>
                     <p onClick={ () => setChange(<Appliances />) }>Appliances</p>
                     <p onClick={ () => setChange(<Ecosystem />) }>galaxy Ecosystem</p>
                </div>

                <div>

                    {change}
                </div>
            </div>
        </>
     )
}

export default Week;