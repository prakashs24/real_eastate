import React from "react";
import Logo from "../Assets/logo.png"
import Profile from '../Assets/profile.png'
import Adjust from '../Assets/adjust.png'
function Navber() {
    return (
        <div className="">
            <div className="container-fluid bg-dark">
                <div className="row">
                    {/* col-1 */}
                    <div className="col-8 my-2">
                        <img src={Logo} alt='logo' className='logo bg-white border rounded-4 border-4 border-secondary'></img>
                    </div>
                    {/* col-2 */}
                    <div className="col-2 p-0 my-auto">
                        <div className="float-end ">
                            <img src={Profile} alt='profile' className='navicon border rounded-5 border-3 border-white bg-warning'></img>
                        </div>
                    </div>
                    {/* col-3 */}
                    <div className="col-2 p-0 my-auto">
                        <div className='text-center' >
                            <img src={Adjust} alt='adjust' className='navicon border rounded-5 border-3 border-white'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navber;