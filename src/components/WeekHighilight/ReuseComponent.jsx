import StoreNewIn from './StoreHighiligts/Index'
import New from './New';

const ReuseComponents = ({ itemsdata }) => {
    return (

        <>
            {itemsdata.map((items, index) => {
                return (
                    <div key={index} className="col-6 mb-1">
                        <div className="position-relative">
                            <div className="mainGrid mt-2 text-center">
                                <h6>{items.title}</h6>
                                <h6>{items.price}</h6>
                                <button type="button" className="btn btn-info mx-auto d-none d-md-block">Buy now</button>
                            </div>
                            <img
                                className="img-fluid hovermain"
                                src={items.img}
                            />
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default ReuseComponents