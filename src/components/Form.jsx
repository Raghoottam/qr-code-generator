import '../Style/Form.css'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Form(props) {
    const [value, setValue] = useState('')
    const [size, setSize] = useState()
    const [title, setTitle] = useState('')

    const onValueChange = (e) => {
        setValue(e.target.value)
        props.onValueChange(e.target.value)
    }

    const onSizeChange = (e) => {
            setSize(e.target.value)
            props.onSizeChange(e.target.value)
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
        props.onTitleChange(e.target.value)
    }

    const handleOnSubmit = () => {
        props.onButtonClick();
    }

    return (
        <>
            <center>
                <div className='title'>
                    Create Your QR Code
                </div>
                <div className="shadow p-2 mb-6 floating-form">
                    <div className='padding'></div>
                    <div className="floating-label">
                        <textarea className="floating-input floating-textarea" placeholder=" " value={value} onChange={(e) => { onValueChange(e) }}></textarea>
                        <span className="highlight"></span>
                        <label>What should your QR Code read?</label>
                    </div>

                    <div className="floating-label">
                        <input className="floating-input" type="number" placeholder=" " value={size} onChange={(e) => onSizeChange(e)} />
                        <span className="highlight"></span>
                        <label>What should be the size?</label>
                    </div>

                    <div className="floating-label">
                        <input className="floating-input" type="text" placeholder=" " value={title} onChange={(e) => onTitleChange(e)} />
                        <span className="highlight"></span>
                        <label>What should be the title?</label>
                    </div>
                    <div className="floating-label">
                        <button className='btn btn-outline-success' onClick={() => handleOnSubmit()}>Submit</button>
                    </div>
                    <div className='padding'></div>
                </div>
            </center>
        </>
    )
}
