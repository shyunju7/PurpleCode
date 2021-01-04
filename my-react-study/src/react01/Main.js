import React, { useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>open</button>
      {isOpen ? <Modal isOpen={openModal} close={closeModal} /> : null}
    </div>
  );
};

export default Main;
