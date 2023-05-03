import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  // const {}

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/todos')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://127.0.0.1:5000/todos/delete/'+id)
    .then((res) => {
      location.reload()
    })
    .catch((err) => console.log(err))
  }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>Todo List</h2>
        <div className='d-flex justify-content-left my-1'>
          <Link to="/create" className='btn btn-success'>Create +</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo, index) => {
              return (
              <tr key={index}>
                <th>{todo.title}</th>
                <th>{todo.priorityLevel}</th>
                <Link onClick={() => handleDelete(todo._id)} className='btn btn-danger btn-sm'>Completed</Link>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home