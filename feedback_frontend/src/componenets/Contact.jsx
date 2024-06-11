import React from 'react';

const Contact = ({ onSubmit }) => {
  return (
    <>
      <div className="cont-report">
        <div className="let-sentence">
          <p className="let">Get in Contact with us for your </p>
          <p className="let">queries!</p>
        </div>
        <div className='section'>
          <label className="choose">Your Name</label>
          <textarea className='name-text' placeholder="Enter your Name *"></textarea>
          <label className="choose">What would you like to ask?</label>
          <textarea className='name-text1' placeholder="Write Here.."></textarea>
          <div className='sub-div'>
            <button className="submit-btn" onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
