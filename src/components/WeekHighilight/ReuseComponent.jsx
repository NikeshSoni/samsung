import StoreNewIn from './StoreHighiligts/Index'
import New from './New';

const ReuseComponents = ({ itemsdata }) => {
    console.log(itemsdata);
    return (

        <>
            {itemsdata.map((items) => {
                return (
                    <div class="col-6 mb-1">
                        <div className="position-relative">
                            <div className="mainGrid mt-2 text-center">
                                <h6>{items.title}</h6>
                                <h6>Starting ₹ 60990*</h6>
                                <button type="button" className="btn btn-info">Buy now</button>
                            </div>
                            <img
                                className="img-fluid"
                                src="https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-NP750XGJ-KG1IN.jpg?$330_330_JPG$"
                            />
                        </div>
                    </div>
                )
            })}
        </>




        // <div class="col-6 ">
        //     <div className="position-relative">
        //         <div className="mainGrid mt-2 text-center">
        //             <h6>Galaxy F55 5G</h6>
        //             <h6>Starting ₹ 24999*</h6>
        //             <button type="button" className="btn btn-info">Buy now</button>
        //         </div>
        //         <img
        //             className="img-fluid"
        //             src="https://images.samsung.com/is/image/samsung/assets/in/home/F55_330X330.jpg?$330_330_JPG$"
        //         />
        //     </div>
        // </div>



        // <div class="col-6 ">
        //     <div className="position-relative">
        //         <div className="mainGrid mt-2 text-center">
        //             <h6>650 L 4 Door Convertible </h6>
        //             <h6>Starting ₹ 175900* </h6>
        //             <button type="button" className="btn btn-info">Buy now</button>
        //         </div>
        //         <img
        //             className="img-fluid"
        //             src="https://images.samsung.com/is/image/samsung/assets/in/home/RF65DB90BD12TL_Small_Tile_330x330.jpg?$330_330_JPG$"
        //         />
        //     </div>
        // </div>
        // <div class="col-6 ">
        //     <div className="position-relative">
        //         <div className="mainGrid mt-2 text-center">
        //             <h6>1.08 m (43) Crystal UHD</h6>
        //             <h6>Starting ₹ 30516* </h6>
        //             <button type="button" className="btn btn-info">Buy now</button>
        //         </div>
        //         <img
        //             className="img-fluid"
        //             src="https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-UA50DUE70BKLXL.jpg?$330_330_JPG$"
        //         />
        //     </div>
        // </div>

    )
}

export default ReuseComponents