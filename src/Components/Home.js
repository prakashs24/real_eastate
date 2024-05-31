import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/styles.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cards from '../Components/Card';
import Fooder from '../Components/Fooder';
import MainMenu from './MainMenu';
import Carousell from './Carousel';
import Navbar from './Navbar';
function Home() {
    return (
        <div >
            {/* header */}

            <div className=''>
                <Navbar />
            </div>

            <section className='background p-1 pt-3'>
                <section className='container'>
                    {/* carousel */}
                    <div className=''>
                        <Carousell />
                    </div>
                    
                    {/* main menu */}
                    <div className=''>
                        <MainMenu />
                    </div>

                    {/* Card */}

                    <div className='row'>
                        <Cards />
                    </div>

                </section>
            </section>

            {/* Fooder */}
            <div className='row p-0 m-0' >
                <Fooder />
            </div>



        </div>
    )
}

export default Home;