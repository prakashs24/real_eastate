import React,{useState} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import About from "./About";
import Home from "./Home";
import '../Components/styles.css'
function MainMenu() {

    return (
        <div >
            {/* row-1 */}
            <div className='row pt-3 '>
                <div className='col-12'>
                    <h4 className='fw-bold'>Main menu</h4>
                </div>
            </div>
            {/* row-2 */}
            <div className='row '>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-3'>
                        <Link to="/about" >
                            <div className='border text-center rounded-4 border-4 bg-secondary py-1 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-info-circle-fill  pt-1 text-warning" viewBox="0 0 16 16">
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                                </svg>
                                <div className="m-0">
                               
                                <p className="m-0 text-white ">About</p>
                            </div>
                            </div>
                            </Link>
                        </div>
                        <div className='col-3 '>
                            <div className='border text-center rounded-4 border-4 bg-secondary py-1 '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-square pt-1 text-warning" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                                <div className="m-0">
                                <p className="m-0 text-white ">Blog</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-3 '>
                            <div className='border text-center rounded-4 border-4 bg-secondary py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat-right-text pt-1 text-warning" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <div className="m-0 ">
                                <p className="m-0 text-white ">Test</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-3 '>
                            <div className='border text-center rounded-4 border-4 bg-secondary py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-lines-fill pt-1 text-warning" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                </svg>
                                <div className="m-0 ">
                                <p className="m-0 text-white ">User</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
export default MainMenu;