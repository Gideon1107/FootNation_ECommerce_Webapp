import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {

    const toastSetting ={
      hideProgressBar: true,
      autoClose: 2000
    }

    try {
      const response = await axios.get(backendUrl + "/api/product/list")
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message, toastSetting)
      }


    } catch (error) {
      console.log(error)
      toast.error(error.message, toastSetting)
    }
  }

  const removeProduct = async (id) => {

    const toastSetting ={
      hideProgressBar: true,
      autoClose: 2000
    }

      try {
        const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}})
        if (response.data.success) {
          toast.success(response.data.message, toastSetting)
          await fetchList();
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message, toastSetting)
        
      }
  }

  useEffect(() => {
    fetchList();
  },[])

  return (
    <>
      <p className='mb-2'>All Products</p>
      <div className='flex flex-col gap-2'>

        {/* -----------------List Table Title ------------------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* ------------------Product List-------------------- */}

        {
          list.map((item, index)=> (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
                <img className='w-12' src={item.image[0]} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency}{item.price}</p>
                <img onClick={() => removeProduct(item._id)} className='w-3 cursor-pointer float-right md:mx-auto block md:w-4' src={assets.delete_icon} alt="" />
                {/* <p className='text-right md:text-center cursor-pointer text-lg'>X</p> */}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default List