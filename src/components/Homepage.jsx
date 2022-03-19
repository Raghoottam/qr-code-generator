import React, { useState } from 'react'
import Form from './Form';
import QRCode from "react-qr-code";
import { Modal, Button } from 'react-bootstrap';


export default function Homepage() {

  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [level,setLevel] = useState('H')
  const [value,setValue] = useState('Welcome')
  const [size,setSize] = useState(250)
  const [title,setTitle] = useState('Test Title')

  const onButtonClick = () => {
    setShowModal(!showModal);
  }

  const onValueChange = (Value) => {
    setValue(Value);
  }

  const onLevelChange = (Value) => {
    setLevel(Value);
  }

  const onSizeChange = (Value) => {
    setSize(Value);
  }

  const onTitleChange = (Value) => {
    setTitle(Value);
  }

  return (
    <>
      <Form
       onValueChange={onValueChange}
       onButtonClick={onButtonClick}
       onLevelChange={onLevelChange}
       onSizeChange={onSizeChange}
       onTitleChange={onTitleChange}
       />
        <Modal show={showModal} onHide={onButtonClick}>
        <Modal.Header closeButton>
          <Modal.Title>Your QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <QRCode value={value} bgColor='#ffffff' fgColor='#000000' level={level} size={size} title={title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onButtonClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {
        !showModal &&
        <button className='btn btn-primary'
          onClick={() => onButtonClick()}>
          Load QR
        </button>
      }
      <QRCode value={value} bgColor='#ffffff' fgColor='#000000' level={level} size={size} title={title} />
    </>
  )
}
