import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import { useGame } from "../contexts/gamecontext";
import "./css/ExitGame.css"; 
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 1000,
  }
};

const ExitGame = () => {
  const { pauseTimer, resumeTimer, resetGame } = useGame();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
      setIsOpen(true);
      pauseTimer(); // Pause the timer when opening modal
  }

  function closeModal() {
      setIsOpen(false);
      resumeTimer(); // Resume the timer when closing modal
  }

  function handleExit() {
      resetGame(); // Reset timer and score when exiting
  }


    return (

      <div className="exit-game-overlay">
        <button onClick={openModal}>Exit Game</button>
      <Modal
        isOpen={modalIsOpen}
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
            <Link to="/dashboard" className="exit-button exit-btn" onClick={handleExit}>Exit Game</Link>
          </div>
        </div>
      </Modal>
        
      </div>
    );
  };
  
  export default ExitGame;
