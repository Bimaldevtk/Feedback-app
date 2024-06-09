import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div className='nav-body'>
        <div className='title-grp'>
        <label className='title'>THE</label>
        <label className='title-product'>PRODUCT</label>
        <label className='title'>PLATFORM</label>
        </div>
        <div className='nav-comp'>
            <div className='vector-learn'>
            <div className='nav-item'>
                <Link to={"/"}>
                <p className='font'>Learn</p>
                
                </Link>
            </div>
            <div className='nav-item' >
                <img className='vector-img'   src='images/Vector 1.png' alt='vector-img'/>
            </div>
            </div>
            <div className='vector-practice'>
            <div className='nav-item'>
                <Link to={"/"}>
                <p className='font'>Practice</p>
                    </Link>
            </div>
            <div className='nav-item' >
                <img className='vector-img'  src='images/Vector 1.png' alt='vector-img'/>
            </div>
            </div>
            
            {/* <div className='ellipse-img' > */}
                <img className='ellipse'  src='images/Ellipse 52.png' alt='ellipse-img'/>
            {/* </div> */}

        </div>
      
    </div>
    </>
  )
}

export default Navbar
