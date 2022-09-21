import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { customFetch } from '../../Fetch/customFetch'
import { data } from './ItemList'

function Category() {

    const [todos, setTodos] = useState([])
    
    const {status} = useParams()

    useEffect(() => {
       
        if(!status){

        customFetch().then(response => {
            setTodos(response)})
        }else {
            customFetch().then(r => {
                setTodos(r.filter(st => st.status === status))
            })
        }
    },[status])

  return (
    <div className='containerToDoList'>
        <div className='buttons'>
        <Link to='/category/:id' >Upcoming</Link>
        </div>
    </div>
  )
}

export default Category