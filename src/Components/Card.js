import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card1 from '../Assets/card1.jpg';
import Card2 from '../Assets/card2.jpg';
import Card4 from '../Assets/card4.jpg';
import Card5 from '../Assets/card5.jpg';
import Card6 from '../Assets/card6.jpg';
import Card7 from '../Assets/card7.jpg';

function Cards() {
    return (
        <div className="pb-2">
            {/* services */}
            <div className='row pt-3'>
                <div className='col-12'>
                    <h4 className='fw-bold'>Service</h4>
                </div>
            </div>
            {/* row-1 */}
            <div className="row">
                {/* col-1 */}
                <div className="col-4 p-1">
                    <Card className="">
                        <Card.Body className='m-0 p-0'>
                            <Card.Img variant="top" src={Card1} className="card-img" />
                            <Card.ImgOverlay className=' card-m p-0 '>
                                <div className="pt-2">
                                    <Card.Title className='m-0 p-0 fs-6 fw-bold text-center text-white'> Buildings For Sale </Card.Title>
                                    <Card.Text className='m-0 p-0'>
                                        <div className="row m-0">
                                            <div className="col-4 text-end p-0 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee text-warning m-0" viewBox="0 0 16 16">
                                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                </svg>
                                            </div>
                                            <div className="col-8 p-0 m-0">
                                                <p className="fw-bold text-start m-0">4,00000</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>

                {/* col-2 */}
                <div className="col-4 p-1">
                    <Card className="">
                        <Card.Body className='m-0 p-0'>
                            <Card.Img variant="top" src={Card2} className="card-img" />
                            <Card.ImgOverlay className=' card-m p-0 '>
                                <div className="pt-2">
                                    <Card.Title className='m-0 p-0 fs-6 fw-bold text-center text-white'>Modern Home Sale</Card.Title>
                                    <Card.Text className='m-0 p-0'>
                                        <div className="row m-0">
                                            <div className="col-4 text-end p-0 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee text-warning m-0" viewBox="0 0 16 16">
                                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                </svg>
                                            </div>
                                            <div className="col-8 p-0 m-0">
                                                <p className="fw-bold text-start m-0">2,00000</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>


                {/* col-3 */}

                <div className="col-4 p-1">
                    <Card className="">
                        <Card.Body className='m-0 p-0'>
                            <Card.Img variant="top" src={Card4} className="card-img" />
                            <Card.ImgOverlay className=' card-m p-0 '>
                                <div className="pt-2">
                                    <Card.Title className='m-0 p-0 fs-6 fw-bold text-center text-white'>Modern Home Sale</Card.Title>
                                    <Card.Text className='m-0 p-0'>
                                        <div className="row m-0">
                                            <div className="col-4 text-end p-0 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee text-warning m-0" viewBox="0 0 16 16">
                                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                </svg>
                                            </div>
                                            <div className="col-8 p-0 m-0">
                                                <p className="fw-bold text-start m-0">3,00000</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>


            </div>
            {/* row-2 */}
            <div className="row">
                {/* col-1 */}
                <div className="col-4 p-1">
                    <Card className="">
                        <Card.Body className='m-0 p-0'>
                            <Card.Img variant="top" src={Card5} className="card-img" />
                            <Card.ImgOverlay className=' card-m p-0 '>
                                <div className="pt-2">
                                    <Card.Title className='m-0 p-0 fs-6 fw-bold text-center text-white'> Buildings For Sale </Card.Title>
                                    <Card.Text className='m-0 p-0'>
                                        <div className="row m-0">
                                            <div className="col-4 text-end p-0 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee text-warning m-0" viewBox="0 0 16 16">
                                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                </svg>
                                            </div>
                                            <div className="col-8 p-0 m-0">
                                                <p className="fw-bold text-start m-0">5,00000</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>

                {/* col-2 */}
                <div className="col-4 p-1">
                    <Card className="">
                        <Card.Body className='m-0 p-0'>
                            <Card.Img variant="top" src={Card6} className="card-img" />
                            <Card.ImgOverlay className=' card-m p-0 '>
                                <div className="pt-2">
                                    <Card.Title className='m-0 p-0 fs-6 fw-bold text-center text-white'>Modern Home Sale</Card.Title>
                                    <Card.Text className='m-0 p-0'>
                                        <div className="row m-0">
                                            <div className="col-4 text-end p-0 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee text-warning m-0" viewBox="0 0 16 16">
                                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                </svg>
                                            </div>
                                            <div className="col-8 p-0 m-0">
                                                <p className="fw-bold text-start m-0">3,00000</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>


                {/* col-3 */}

                <div className="col-4 p-1">
                    <Card className="">
                        <Card.Body className='m-0 p-0'>
                            <Card.Img variant="top" src={Card7} className="card-img" />
                            <Card.ImgOverlay className=' card-m p-0 '>
                                <div className="pt-2">
                                    <Card.Title className='m-0 p-0 fs-6 fw-bold text-center text-white'> Buildings For Sale </Card.Title>
                                    <Card.Text className='m-0 p-0'>
                                        <div className="row m-0">
                                            <div className="col-4 text-end p-0 m-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-rupee text-warning m-0" viewBox="0 0 16 16">
                                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                                </svg>
                                            </div>
                                            <div className="col-8 p-0 m-0">
                                                <p className="fw-bold text-start m-0">6,00000</p>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}
export default Cards