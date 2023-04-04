import React from "react";
import { Modal, Button } from "react-bootstrap";
import { BiMessageCheck } from "react-icons/bi";
import "./SubscribeModal.css";

const SubscribeModal = ({ showModal, setShowModal, modalMessage }) => {
  const handleClose = () => setShowModal(false);

  return (
    <Modal
      className="subscribe-modal-container"
      show={showModal}
      onHide={handleClose}
    >
      <div className="rounded-0 bg-blur shadow-lg bg-light">
        <Modal.Header closeButton>
          <Modal.Title>Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary text-uppercase rounded-0" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default SubscribeModal;
