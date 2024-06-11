import React from "react";

const Suggestion = ({ onSubmit }) => {
  return (
    <div>
      <div className="cont-report">
        <div className="let-sentence">
          <p className="let">Share your Suggestions with us </p>
          <p className="let">for a chance to earn rewards!</p>
        </div>
        <div className="section">
          <label className="choose">Choose a section</label>
          <select class="custom-select">
            <option>Interview Questions</option>
            <option>Concept Cards</option>
            <option>Pratice Questions</option>
            <option>Quizzes</option>
          </select>
          <p className="describe">Describe the Suggestion in detail.</p>
          <div className="textarea-container">
            <button className="attach-btn">
              <img
                className="attach"
                src="/images/attachpic.png"
                alt="Attach"
              />
              Attach
            </button>
          </div>
        </div>

        <textarea className="text-area" placeholder="Write Here.."></textarea>
        <div className="sub-div">
          <button className="submit-btn" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
