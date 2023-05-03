import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Create = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        title: '',
        priorityLevel: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/todos', values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <h2>Add Todo</h2>
                <div className="mb-2">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter Title' className='form-control' onChange={(e) => setValues({...values, title: e.target.value})}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Set Priority (1 - 10)</label>
                    <input type="text" placeholder='Number' className='form-control' onChange={(e) => setValues({...values, priorityLevel: e.target.value})}/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create