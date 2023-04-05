import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import search from "../../assets/images/loupe.png";
import "./SearchModal.css";

const SearchModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = () => {
    window.location.href =
      "https://www.google.com/search?q=site%3Awww.google.com";
  };

  return (
    <>
      <img
        className="search"
        src={search}
        alt="Search button"
        onClick={handleShow}
      />

      <Modal
        className="search-modal"
        show={show}
        onHide={handleClose}
      >
        <div className="rounded-0 border-0 bg-blur shadow-lg bg-light">
          <Modal.Header closeButton>
            <Modal.Title>What are you looking for?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Search..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary text-uppercase rounded-0"
              onClick={handleSearch}
            >
              Search now
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default SearchModal;
