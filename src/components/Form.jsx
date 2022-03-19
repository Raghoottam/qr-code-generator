import React from 'react'

export default function Form(props) {
    return (
        <form class="row g-3 ">
            <div class="col-md-4">
                <input type="text" class="form-control" placeholder='Value'/>
            </div>
            <div class="col-md-4">
                <input type="number" class="form-control" placeholder='Size'/>
            </div>
            <div class="col-md-4">
                <select class="form-select form-select-md sm-3" aria-label=".form-select-sm example">
                    <option selected disabled>Level</option>
                    <option value="L">Low</option>
                    <option value="M">Medium</option>
                    <option value="Q">Quartile</option>
                    <option value="H">High</option>
                </select>
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Title"/>
            </div>
        </form>
    )
}
