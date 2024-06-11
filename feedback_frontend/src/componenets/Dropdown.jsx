import React, { useState } from 'react';
import './Dropdown.css';
import Report from './Report';
import Feedback from './Feedback';
import Suggestion from './Suggestion';
import Contact from './Contact';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleToggle = () => {
    if (selectedOption) {
      setSelectedOption('');
    } else {
      setOpen(!open);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  const handleSubmit = () => {
    setShowThankYouMessage(true);
    setSelectedOption('');

  
    setTimeout(() => {
      setShowThankYouMessage(false);
    }, 2000);
  };

  return (
    <>
      <div className='full-menu'>
        <div className='text-icons'>
          <div>
            <button className="dropdown-btn" onClick={handleToggle}>
              <img src={(open || selectedOption) ? "/images/close.png" : "/images/menu.png"} alt="Menu" />
            </button>
            {open && (
              <div className="dropdown-content">
                <div className="dropdown-item" onClick={() => handleOptionClick('Report an Issue')}>
                  <button className='word'>Report an Issue</button>
                  <img className='pic' src="/images/report.png" alt="Report an Issue" />
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('Share Feedback')}>
                  <button className='word'>Share Feedback</button>
                  <img className='pic' src="/images/share.png" alt="Share Feedback" />
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('Give Suggestion')}>
                  <button className='word'>Give Suggestion</button>
                  <img className='pic' src="/images/suggestion.png" alt="Give Suggestion" />
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('Contact Us')}>
                  <button className='word'>Contact Us</button>
                  <img className='pic' src="/images/contact.png" alt="Contact Us" />
                </div>
              </div>
            )}
          </div>

          {selectedOption && (
            <>
              <div className="input-field">
                {selectedOption === 'Report an Issue' && (
                  <Report onSubmit={handleSubmit} />
                )}
                {selectedOption === 'Share Feedback' && (
                  <Feedback onSubmit={handleSubmit} />
                )}
                {selectedOption === 'Give Suggestion' && (
                  <Suggestion onSubmit={handleSubmit} />
                )}
                {selectedOption === 'Contact Us' && (
                  <Contact onSubmit={handleSubmit} />
                )}
              </div>
              <div className="horizontal-buttons">
                <button className="dropdown-item" onClick={() => handleOptionClick('Report an Issue')}>
                  <img className='pic' src="/images/report.png" alt="Report an Issue" />
                </button>
                <button className="dropdown-item" onClick={() => handleOptionClick('Share Feedback')}>
                  <img className='pic' src="/images/share.png" alt="Share Feedback" />
                </button>
                <button className="dropdown-item" onClick={() => handleOptionClick('Give Suggestion')}>
                  <img className='pic' src="/images/suggestion.png" alt="Give Suggestion" />
                </button>
                <button className="dropdown-item" onClick={() => handleOptionClick('Contact Us')}>
                  <img className='pic' src="/images/contact.png" alt="Contact Us" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {showThankYouMessage && (
        <div className='thank-you-chatbox'>
          <p className='thanks'>Thanks for reaching out to us!</p>
          <p className='thanks' >We will get back to you as soon as possible.</p>
        </div>
      )}
    </>
  );
};

export default Dropdown;
