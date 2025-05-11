import React from 'react'
import { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()
  const handleDeleteBook = () =>{
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
        enqueueSnackbar('Book deleted successfully',{variant: 'success'})
      })
      .catch((error) => {
        console.log(error)
        alert('Error deleting book')
        setLoading(false)
        enqueueSnackbar('Error',{variant:'error'})
      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <h1 className='text-xl text-red-500'>Are you sure you want to delete this book?</h1>
        <button onClick={handleDeleteBook} className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4'>Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook