import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Form(props) {
    const [level, setLevel] = useState('H')
    const [value, setValue] = useState('Welcome')
    const [size, setSize] = useState(250)
    const [title, setTitle] = useState('Test Title')

    const onValueChange = (e) => {
        setValue(e.target.value)
        props.onValueChange(e.target.value)
    }

    const onLevelChange = (e) => {
        setLevel(e.target.value)
    }

    const onSizeChange = (e) => {
        setSize(e.target.value)
        props.onSizeChange(e.target.value)
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleOnSubmit = () => {
        props.onButtonClick();
    }

    return (
        <form className='col-6'>
            <div className='p-1 row'>
                <label className='col-3 mx-2'>Value</label>
                <input type="text" className="col-8" value={value} onChange={(e)=>{onValueChange(e)}} />
            </div>
            <div className='p-1 row'>
            <label className='col-3 mx-2'>Size</label>
                <input type="number" className="col-8" max={340} value={size} onChange={(e) => onSizeChange(e)} />
            </div>
            <div className='p-1 row'>
            <label className='col-3 mx-2'>Level</label>
                <select className="form-select-md sm-3 col-8" aria-label=".form-select-sm example" selected={value} onSelect={(e)=>onLevelChange(e)}>
                    <option value="L" onSelect={(e)=>onLevelChange(e)}>Low</option>
                    <option value="M" onSelect={(e)=>onLevelChange(e)}>Medium</option>
                    <option value="Q" onSelect={(e)=>onLevelChange(e)}>Quartile</option>
                    <option value="H" onSelect={(e)=>onLevelChange(e)}>High</option>
                </select>
            </div>
            <div className='p-1 row'>
            <label className='col-3 mx-2'>Title</label>
                <input type="text" className="col-8" value={title} onChange={(e) => onTitleChange(e)} />
            </div>
            <Button onClick={()=>handleOnSubmit()}>Submit</Button>
        </form>
    )
}
