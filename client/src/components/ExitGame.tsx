import { Link } from "react-router-dom";
import "./css/ExitGame.css"; 
import Modal from 'react-modal';
import { useState } from "react";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ExitGame = () => {
    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
      // function afterOpenModal() {
        // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    //   }
    
      function closeModal() {
        setIsOpen(false);
      }
    return (

      <div className="exit-game-overlay">
        <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="exit-game-modal">
          <h2>Exit Game</h2>
          <p className="exit-warning">
            Wait! Your progress will not be saved if you exit before finishing your contract.
            <br />
            Sure you want to exit?
          </p>
          <div className="exit-buttons">
            <button className="exit-button resume-btn" onClick={closeModal}>
              Resume Game
            </button>
            <Link to="/dashboard" className="exit-button exit-btn">Exit Game</Link>
          </div>
        </div>
      </Modal>
        
      </div>
    );
  };
  
  export default ExitGame;
