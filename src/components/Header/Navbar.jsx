import { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../assets/icons/search.png';
import Person from '../../assets/icons/user-male.png';
import Shoping from '../../assets/icons/shopping-cart.png';
import Mobile from '../../pages/Mobile';
import Login from '../../pages/Login/Login';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddToCart from './AddToCart';


const Navbar = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <header>
                <nav className='navBar d-flex mx-auto gap-4'>
                    <div className="mainLogo">
                        <h3>Samsung</h3>
                    </div>

                    <ul className='p-0 m-0 d-flex gap-4'>
                        <Link className='text-dark navweight' to='/'>
                            Shop
                        </Link>
                        <Link className=' text-dark navweight dropbtn showBar' to='/mobile'>
                            Mobile
                            {/* Hover Data here */}
                            <Mobile />

                        </Link>
                        <Link className='text-dark navweight' to='/tv'>
                            TV&AV
                        </Link>
                        <Link className='text-dark navweight' to='/homeApplication'>
                            Home Application
                        </Link>
                    </ul>

                    <div className='d-flex gap-4'>
                        <Link className='text-dark navweight' to='/homeApplication'>
                            Support
                        </Link>
                        <Link className='text-dark navweight' to='/computing'>
                            For Business
                        </Link>
                    </div>

                    <div className='d-flex gap-3 '>
                        <img src={Search} />


                        <div data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <img src={Shoping} />
                        </div>


                        <div variant="primary" className='text-dark w-100 navweight' >
                            <img src={Person} variant="primary" />
                            <Login show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>

                    {/* <AddToCart /> */}
                </nav>
            </header>
        </>
    )
}






export default Navbar;