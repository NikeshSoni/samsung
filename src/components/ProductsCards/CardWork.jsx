import CardStore from './CardStore'

const CardWork = () => {
    return (

      <>
        <div className='text-center my-4'>
            <h1>Recommended Products</h1>
        </div>
        <div className="my-5  flex-wrap d-flex container mx-auto ">

            {CardStore.map((items) => {
                return (
                    <div className="cardBg p-4 mt-2 text-center mx-auto " >
                        <img src={items.image} className="img-fluid" alt="product" />
                        <div className="card-body">
                            <h6 className="card-text fw-bolder commanCardFonts"> {items.heading}</h6>
                            <div>
                                <h5> Price - {items.price}</h5>
                                <p className="p-0 m-0 navLinks ">{items.discription}</p>
                                <p className="p-0 m-0 navLinks ">{items.saveMoney}</p>
                            </div>
                            <div>
                                <p className="navLinks p-0 m-0">{items.info} </p>
                                <a className="text-decoration-none navLinks p-0 m-0" href="$">
                                    EMI Calculator
                                </a>
                            </div>
                            <button type="button" className="btn btn-dark mt-2">Buy Now</button>
                        </div>
                    </div>
                )
            })}


        </div>
      </>

    )
}

export default CardWork;