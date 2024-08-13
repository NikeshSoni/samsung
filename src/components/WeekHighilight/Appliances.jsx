import ReuseComponents from './ReuseComponent';
import ApplicationStore from './StoreHighiligts/Application'

const Appliances = (props) => {

    const { itemval } = props;
    return(
       <>
         <div className="p-1 p-md-2 p-lg-3">
                <div className="row d-flex">
                    <div className="col-12 text-center mb-3 mb-lg-0 mx-auto col-lg-6">
                        <div className="position-relative">
                            <div className="mainGrid mt-2 text-center">
                                <h4>{itemval.heading}</h4>
                                <p className="">{itemval.discription}</p>
                                <button type="button" className="btn btn-info">Buy now</button>
                            </div>
                            <img
                                className="img-fluid  rounded-3"
                                src={itemval.image}
                              />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mx-auto row">
                    <div className="row mx-auto  flex-wrap">
                        <ReuseComponents itemsdata={ApplicationStore} />
                    </div>
                </div>
                </div>
            </div>
       </>
    )
}

export default Appliances
