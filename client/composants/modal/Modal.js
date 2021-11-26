import React, { useState } from "react";
import { P, Button } from "../../styles/global";
import Modal from "react-modal";
import { useDataCity } from "../../context/context";

export default function ComponentModal() {
  const customStyles = {
    content: {
      boxShadow: "0px 0px 3px #3197d4",
      width: "300px",
      height: "150px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const { response, setResponse } = useDataCity();

  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setResponse(null);
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <P fontSize="15px" color="#6341D1">
          {response}
        </P>
        <Button cursor="pointer" onClick={closeModal}>
          Fermer
        </Button>
      </Modal>
    </>
  );
}
