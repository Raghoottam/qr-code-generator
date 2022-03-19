import React, { useState } from 'react'
import Form from './Form';
import QRCode from "react-qr-code";
import { Modal, Button } from 'react-bootstrap';


export default function Homepage() {

  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onButtonClick = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Form />
      {
        showModal &&
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Your QR Code</Modal.Title>
          </Modal.Header>

          <Modal.Body className='align-center'>
            <QRCode value='QRCode' bgColor='#ffffff' fgColor='#000000' level='H' size={250} title='Testing' />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={() => onButtonClick()}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      }
      {
        !showModal &&
        <button className='btn btn-primary'
          onClick={() => onButtonClick()}>
          Load QR
        </button>
      }
    </>
  )
}
