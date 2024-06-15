import ReuseComponents from './ReuseComponent';
import MobileStore from './StoreHighiligts/Mobile'

const Highlights = (props) => {

    const {itemval} = props;

    return (
        <>
            <div class="p-1 p-md-2 p-lg-3">
                <div class="row mx-auto">
                    <div class="col-12 text-center mb-3 mb-lg-0 mx-auto col-lg-6">
                        <div className="position-relative">
                            <div className="mainGrid mt-2 text-center">
                                <h4>{itemval.heading}</h4>
                                <h4>{itemval.info}</h4>
                                <p className="">{itemval.discription}</p>
                                <button type="button" className="btn btn-info">Buy now</button>
                            </div>
                            <img
                                className="img-fluid  rounded-3"
                                src={itemval.image}
                            />
                        </div>
                    </div>

                    <div class="col-6  row">
                        <div class="row  flex-wrap">
                            <ReuseComponents itemsdata={MobileStore} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Highlights