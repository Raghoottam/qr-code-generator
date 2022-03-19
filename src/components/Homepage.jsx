import React, { useState } from 'react'
import Form from './Form';
import QRCode from "react-qr-code";
import "../Style/homepage.css";
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default function Homepage() {

  const [showModal, setShowModal] = useState(false);
  const [level,setLevel] = useState('H')
  const [value,setValue] = useState('Welcome')
  const [size,setSize] = useState(250)
  const [title,setTitle] = useState('Test Title')

  const onButtonClick = () => {
    if(value.length <= 0)
    {
      toast.error('Value cannot be empty', {autoClose:3000})
    } else{
      setShowModal(!showModal);
    }
    
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
        <Modal show={showModal} onHide={onButtonClick} className=" modal-dialog modal-dialog-centered">
        <Modal.Header closeButton>
          <Modal.Title>Your QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-block text-center my-3'>
           <QRCode value={value} bgColor='#ffffff' fgColor='#000000' level={level} size={size} title={title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onButtonClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  )
}
