import '../Style/Form.css'
import React, { useState } from 'react'
//import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Form(props) {
    const [level, setLevel] = useState('')
    const [value, setValue] = useState('')
    const [size, setSize] = useState()
    const [title, setTitle] = useState('')

    const onValueChange = (e) => {
        setValue(e.target.value)
        props.onValueChange(e.target.value)
    }

    const onLevelChange = (e) => {
        setLevel(e.target.value)
        props.onLevelChange(e.target.value)
    }

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
                <div class="floating-form">
                    <div className='padding'></div>
                    <div class="floating-label">
                        <textarea class="floating-input floating-textarea" placeholder=" " value={value} onChange={(e) => { onValueChange(e) }}></textarea>
                        <span class="highlight"></span>
                        <label>Value</label>
                    </div>

                    <div class="floating-label">
                        <input class="floating-input" type="number" placeholder=" " value={size} onChange={(e) => onSizeChange(e)} />
                        <span class="highlight"></span>
                        <label>Size</label>
                    </div>
                    <div class="floating-label">
                        <select class="floating-select" selected={level} onSelect={(e) => onLevelChange(e)}>
                            <option value="" selected disabled>Select Level</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="Q">Quartile</option>
                            <option value="H">High</option>
                        </select>
                        <span class="highlight"></span>
                    </div>

                    <div class="floating-label">
                        <input class="floating-input" type="text" placeholder=" " value={title} onChange={(e) => onTitleChange(e)} />
                        <span class="highlight"></span>
                        <label>Title</label>
                    </div>
                    <div class="floating-label">
                        <button className='btn btn-outline-success' onClick={() => handleOnSubmit()}>Submit</button>
                    </div>
                    <div className='padding'></div>
                </div>
            </center>
        </>
    )
}
