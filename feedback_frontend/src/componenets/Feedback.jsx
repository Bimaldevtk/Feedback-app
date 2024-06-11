import React from "react";

const Feedback = ({ onSubmit }) => {
  return (
    <div>
      <div className="cont-report">
        <div className="let-sentence">
          <p className="let">Let us know your Feedback</p>
          <p className="let"> about us!</p>
        </div>
        <div className="textarea-container">
          <button className="attach-btn">
            <img className="attach" src="/images/attachpic.png" alt="Attach" />
            Attach
          </button>
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

export default Feedback;
