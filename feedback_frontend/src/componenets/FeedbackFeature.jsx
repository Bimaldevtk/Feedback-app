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
          <div className='answer'>
            <p className='ans-text'>Answers(23)</p>
            <div className='sort-popular'>
            <p className='sort'>Sort By:</p>
            <div class="dropdown">
              <button class="dropbtn">Popular &#9662;</button>
              <div class="dropdown-content">
               </div>
              </div>

            </div>
          

          </div>

          <div className='container-2'>
            <div className='first-div' >
              <div className='pic-name'>
              <img className='neha-pic' src='/images/Ellipse 52.png' />
              <div className='name'>
              <p className='neha-name'><strong>Neha Bhat</strong> (You)</p>
              <p className='date'>Jun 27, 2023</p>
              </div>
              </div>
              <div className='edit-with-pic' >
                <img className='edit-img' src='/images/edit.png' />
                <p className='edit-word' >Edit</p>

              </div>
            </div>
            <div className='Text-c2'>
             <label className='a'>Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum </label>
              <label className='b'>interdum ut velit quam. Bibendum amet mi....</label>
               <label className='c'>Show more</label>

            </div>
            <div className='last-div'>
              <img className='like-img'src='/images/like.png' />
              <p className='like-word'>Like</p>
              <img className='msg-img' src='/images/msg.png'/>
              <input 
                className='text-field' 
                type='text' 
                // value={answer} 
                // onChange={handleInputChange} 
                placeholder='Add a comment'
              />
              <button className='post'>Post</button>

            </div>

          </div>
           

        </div>


       </div>
      
    </>
  )
}

export default FeedbackFeature
