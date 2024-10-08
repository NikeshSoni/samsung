import CardStore from './CardStore';
import { useState } from 'react';
import BuyProduct from "./BuyProduct"

const CardWork = ({ onAddToCart }) => {

    const [dataProduct , setDataProduct] = useState([])

    const onAddToBuy = (items) => {
         setDataProduct(items)
    }

    return (
        <>
            <div className='text-center my-4'>
                <h1>Recommended Products</h1>
            </div>
            <div className="my-5 row container d-flex mx-auto">
                {CardStore.map((items) => {
                    return (
                        <div key={items.id} className="cardBg col-10 p-2 p-md-4 mt-2 text-center mx-auto" data-aos="flip-left" >
                            <img src={items.image} className="img-fluid" alt="product" />
                            <div className="card-body">
                                <h6 className="card-text fw-bolder commanCardFonts"> {items.heading}</h6>
                                <div>
                                    <p className="p-0 m-0 navLinks ">{items.discription}</p>
                                    <p className="p-0 m-0 navLinks ">{items.saveMoney}</p>
                                </div>
                                {/* <div>
                                    <p className="navLinks p-0 m-0">{items.info} </p>
                                    <a className="text-decoration-none navLinks p-0 m-0" href="$">
                                        EMI Calculator
                                    </a>
                                </div> */}
                                <div className="">
                                <h5> Price - ₹ {items.price}</h5>
                                </div>
                                <div className='d-flex gap-4 justify-content-center my-2'>
                                    <button type="button" onClick={() => onAddToBuy(items)}
                                            className="btn btn-dark mt-2 comman-fonts"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        >
                                        Buy Now</button>
                                    <button type="button" onClick={() => onAddToCart(items)} 
                                            className="btn btn-primery mt-2 comman-fonts">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <BuyProduct  onAddToBuyPass={dataProduct}/>

        </>

    )
}

export default CardWork;