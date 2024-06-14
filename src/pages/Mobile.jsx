import { Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Store from '../Store/Store'

const Mobile = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="dropData bg-white z-3  dropdown-content">
                <div className="d-flex ">
                    <div className=" py-4 ">
                        <div className='d-flex w-100'>
                            {/* <Link to="/" >Hiii</Link> */}
                            <ul className='linksHere mainWidth  m-0 p-0'>
                                <Link to="/" >Discover</Link>
                                <Link to="/" >Galaxy AI</Link>
                                <Link to="/" >SmartPhones</Link>
                                <Link to="/" >Tables</Link>
                                <Link to="/" >Watchs</Link>
                                <Link to="/" >One UI </Link>
                                <Link to="/" >Apps And Service </Link>
                            </ul>

                            <ul className='text-start m-0 p-3 col-8'>
                                <h6>New Feature</h6>

                               <div className="row gap-2">
                                {Store.map((items, index) => {
                                        return (
                                            
                                                <div key={index} className="col-3 mt-2 center-app-data bgComman mx-auto p-3 rounded">
                                                    <img className="img-fluid w-100"
                                                        src={items.img} />
                                                    <div className="mt-2 text-center">
                                                        <p className="navLinks">{items.title} </p>
                                                    </div>
                                                </div>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobile;