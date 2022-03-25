import '../Style/Form.css'
import React, { useState } from 'react'
//import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Form(props) {
    //const [level, setLevel] = useState('')
    const [value, setValue] = useState('')
    const [size, setSize] = useState()
    const [title, setTitle] = useState('')

    const onValueChange = (e) => {
        setValue(e.target.value)
        props.onValueChange(e.target.value)
    }

    // const onLevelChange = (e) => {
    //     setLevel(e.target.value)
    //     props.onLevelChange(e.target.value)
    // }

    const onSizeChange = (e) => {
        if (e.target.value < 350) {
            setSize(e.target.value)
            props.onSizeChange(e.target.value)
        } else {
            toast.error('Size should be less than 350', { autoClose: 3000 })
        }
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
            {/* <form className='container Form'>
                <div className='p-1 row'>
                    <label className='col-3 mx-2'>Value</label>
                    <input type="text" className="col-8 field" value={value} onChange={(e) => { onValueChange(e) }} />
                </div>
                <div className='p-1 row'>
                    <label className='col-3 mx-2'>Size</label>
                    <input type="number" className="col-8 field" max={340} value={size} onChange={(e) => onSizeChange(e)} />
                </div>
                <div className='p-1 row'>
                    <label className='col-3 mx-2'>Level</label>
                    <select className="form-select-md sm-3 col-8 field" aria-label=".form-select-sm example" selected={level} onChange={(e) => onLevelChange(e)}>
                        <option value="L">Low</option>
                        <option value="M">Medium</option>
                        <option value="Q">Quartile</option>
                        <option value="H">High</option>
                    </select>
                </div>
                <div className='p-1 row'>
                    <label className='col-3 mx-2'>Title</label>
                    <input type="text" className="col-8 field" value={title} onChange={(e) => onTitleChange(e)} />
                </div>
                <Button onClick={() => handleOnSubmit()}>Submit</Button>
            </form> */}
            <ToastContainer />
            <center>
                <div className='title'>
                    Create Your QR Code
                </div>
                <div className="shadow p-3 mb-5 floating-form">
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
