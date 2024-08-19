import React from 'react'

const BuyProduct = ({ onAddToBuyPass }) => {

    console.log(onAddToBuyPass, "hiiii");

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" style={{ maxWidth: "100%" }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ maxWidth: "80%", height: "auto" }}>
                <div className="modal-content" style={{ height: "auto" }}>
                    <div className="modal-header">
                        <h5 classNameName="modal-title" id="exampleModalLabel">Buy Product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row align-items-center">
                            <div className="d-flex col-6 justify-content-center align-items-center">
                                <img className='img-fluid' src={onAddToBuyPass.buyDataMain} style={{ width: "70%" }} alt="" srcset="" />
                            </div>
                            <div className="col-6">

                                <div className="dataWrapper p-3">
                                    <h5>{onAddToBuyPass.heading}</h5>
                                    <p className='p-0 m-0'>{onAddToBuyPass.buySummery}</p>
                                    <p className='p-0 my-1' style={{fontSize: ".9rem"}}>{onAddToBuyPass.StorageInfo}</p>
                                    <p className='p-0 m-0' style={{fontSize: ".8rem"}}>{onAddToBuyPass.discription}</p>
                                    <h5 className='mt-1'>₹ {onAddToBuyPass.price}</h5>
                                </div>

                                {onAddToBuyPass.extraInfo === undefined && 
                                 onAddToBuyPass.noCost === undefined && 
                                 onAddToBuyPass.earn === undefined ? (

                                   null

                                ) : (
                                    <div className='mt-2 p-3' style={{borderTop: ".7px solid #e2dbdb"}}>
                                    <p className='p-0 m-0'>{onAddToBuyPass.extraInfo}</p>
                                    <p>{onAddToBuyPass.noCost}</p>
                                    <h6>{onAddToBuyPass.earn}</h6>
                                </div>
                                )}


                                <div className="buyBtn p-3">
                                    <button className="buyProductBtn">
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BuyProduct