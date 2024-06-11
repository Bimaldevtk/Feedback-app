import React from 'react';
import './Dropdown.css';

const Report = ({ onSubmit }) => {
  return (
    <>
      <div className='full'>
        <div className='cont-report'>
          <div className='let-sentence'>
            <p className='let'>Let us know about the Issue</p>
            <p className='let'> you are facing right now!</p>
          </div>
          <div className='section'>
            <label className='choose'>Choose a section</label>
            <select className="custom-select">
              <option>Interview Questions</option>
              <option>Concept Cards</option>
              <option>Practice Questions</option>
              <option>Quizzes</option>
            </select>
            <p className='describe'>Describe the issue in detail.</p>
            <div className="textarea-container">
              <button className="attach-btn">
              <img className='attach' src="/images/attachpic.png" alt="Attach" />
              Attach
          </button>
          </div>
            <textarea className='text-area-r' placeholder="Write Here.."></textarea>
          </div>
          <div className='sub-div'>
            <button className="submit-btn" onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
