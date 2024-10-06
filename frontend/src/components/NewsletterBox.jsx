import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }


  return (
    <div>
        <p className='text-xl sm:text-2xl font-small text-gray-800 '>Ready to save 20% on your next order?</p>
        <p className='text-gray-400 mt-3'> Subscribe now for exclusive deals and 20% off your next order!</p>

        <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox