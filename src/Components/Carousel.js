import React from "react";
import { Carousel } from 'react-bootstrap';
import 'react-responsive-carousel';
import Carousel1 from '../Assets/carousel-1.png'
import Carousel2 from '../Assets/carousel-2.png'
import Carousel3 from '../Assets/carousel-3.png'
function Carousell() {
    return (
        <div className="">
            <div className=' bg-white p-0 border rounded-4 border-white border-4'>
                <div className='col-sm-12'>
                    <Carousel className=''>
                        <Carousel.Item>
                            <img className="d-block w-100 img border border-4 rounded-4 border-secondary" src={Carousel1} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 img border border-4 rounded-4 border-secondary" src={Carousel2} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 img border border-4 rounded-4 border-secondary" src={Carousel3} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Carousell;