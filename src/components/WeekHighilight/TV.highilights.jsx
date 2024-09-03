
import TvStore from './StoreHighiligts/Tvstore'
import ReuseComponents from './ReuseComponent';
import ApplicationStore from './StoreHighiligts/Application'


const TvInfo = (props) => {

    const {itemval } = props;


    return(
       <>
         <div className="p-1 p-md-2 p-lg-3 " data-aos="fade-left">
                <div className="row d-flex">
                    <div className="col-12 text-center mb-3 mb-lg-0 mx-auto col-lg-6">
                        <div className="position-relative">
                            <div className="mainGrid mt-2 text-center">
                                <h4>{itemval.heading}</h4>
                                <p className="">{itemval.discription}</p>
                                <button type="button" className="btn btn-info d-none mx-auto d-md-block">Buy now</button>
                            </div>
                            <img
                                className="img-fluid  rounded-3"
                                src={itemval.image}
                              />
                        </div>
                    </div>
                    <div className="col-12 mx-auto  col-lg-6 text-center">
                    <div className="row mx-auto  flex-wrap">
                        <ReuseComponents itemsdata={TvStore} />
                    </div>
                </div>
                </div>
            </div>
       </>
    )
}

export default TvInfo