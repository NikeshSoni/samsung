import { useState } from 'react';
import Video from '../assets/Videos/video.webm';
import videoSmallDivice from '../assets/Videos/videoSmallDivice.webm'

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active position-relative">
                    <div className='position-absolute slideInfo'>
                        <h1>Wide Open! </h1>
                        <h1>See The Wonders </h1>
                        <p>2024 New Monitor Lineup  ₹ </p>
                        <div className='buttonWapper'>
                            <button type="button" className="commanBtn">Buy</button>
                        </div>
                    </div>
                    <img
                        src='https://images.samsung.com/is/image/samsung/assets/in/home/20809_Monitor_Pre-Order_One-Launch-Banner_Homepage-KV_1440X640.jpg?imwidth=1366'
                        className="d-md-block d-none w-100"
                        alt="..." />

                    <img
                        src='https://images.samsung.com/is/image/samsung/assets/in/home/20809_Monitor_Pre-Order_One-Launch-Banner_Homepage-KV_720x1080.jpg?imwidth=360'
                        className="d-block d-md-none w-100"
                        alt="..." />
                </div>
                <div className="carousel-item position-relative">
                    <div className='position-absolute slideInfo'>
                        <h1>Welcome To </h1>
                        <h1>Basepoke AI. </h1>
                        <p>Avail benefits up to ₹ 24500*</p>
                        <div className='buttons align-items-center  d-flex gap-5'>
                            <p className='fw-bolder border-bottom-3 p-0 m-0'>learn More</p>
                            <button type="button" className="commanBtn">Buy</button>
                        </div>
                    </div>
                    <img
                        className="d-md-block d-none w-100"
                        alt="..."
                        src='https://images.samsung.com/is/image/samsung/assets/in/home/Bespoke_AI_Homepage_1440x640.jpg?imwidth=1366' />
                    <img
                        className="d-block d-md-none w-100"
                        alt="..."
                        src='https://images.samsung.com/is/image/samsung/assets/in/home/Bespoke_AI_Homepage_720x1080.jpg?imwidth=360' />

                </div>
                <div className="carousel-item position-relative">
                    <div className='position-absolute slideInfo'>
                        <h1>Galaxy S24 Ultra </h1>
                        <p>Starting at ₹ 117999*</p>

                        <p>Shop Galaxy Fit3 with 24 series</p>
                        <p>and avail ₹ 6750* cart discount </p>

                        <div className='buttonWapper'>
                            <button type="button" className="commanBtn">Buy</button>
                        </div>
                    </div>

                    <video src={Video} typeof='video.mp4' className="d-none d-md-block w-100" alt="..."
                        controls
                        muted
                        autoPlay
                        loop />

                    <video src={videoSmallDivice} typeof='video.mp4' className="d-block d-md-none w-100" alt="..."
                        controls
                        muted
                        autoPlay
                        loop />


                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;