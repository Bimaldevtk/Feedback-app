import React from 'react'
import "./FeedbackFeature.css"
import Navbar from './Navbar'

const FeedbackFeature = () => {
  return (
   
    <>
     <Navbar/>
       <div >
        <div className='Questions'>
          <img className='arrow2' src='/images/Arrow 2.png' alt='arrow_pic'/>
          <p className='characters_of_back_to' >Back to Questions</p>
        </div>
        <div className='big-container-'>
          <div className='container-1'>
            <div className='startup'>
              <div className='buttons'>
              <button className='d-button'>Design</button>
              <button className='t-button'>Technology</button>
              </div>
              <img className='company-pic' src='/images/company type1.png' alt='companypic'/>

            </div>
            <div className='Text-container'>
              <div className='Text-1'>
                <p className='Text-1p'>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?</p>
              </div>
              <div className='Text-2'>
                <p className='Text-2p'>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se?</p>
              </div>
            </div>
            <div className='views'>
              <div className='view-1'>
              <img className='eyepic' src='/images/eye.png' alt='eyepic'/>
              <p className='hundred'>100 views</p>
              </div>
              <div className='view-2'>
                <img className='i-img'  src='/images/i.png' alt='i-button'/>
                <p className='how'>How should you word your answer?</p>
              </div>

            </div>



          </div>
           

        </div>


       </div>
      
    </>
  )
}

export default FeedbackFeature
