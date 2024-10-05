import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Step into your passion with the latest sneakers and exclusive drops. At Footnation, we’re dedicated to bringing you the best in sneaker culture.</p>
            </div>

            <div>
                <p className='text-l font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-l font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+44-7828-764-625</li>
                    <li>contact@footnation.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-600'> Copyright {new Date().getFullYear()}@ footnation.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer