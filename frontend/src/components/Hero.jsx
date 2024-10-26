import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 '>
        {/* LEFT SIDE HERO */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141] flex flex-col items-start'>
                <div className='flex items-center gap-2 justify-center'>
                    <p className='train-one-regular text-3xl lg:text-4xl leading-relaxed'>STEP UP</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
                <h1 className='train-one-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>IN STYLE</h1>
                <div className='flex items-center gap-2'>
                    <Link to='/collection'>
                    <button className='bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700'>SHOP NOW</button>
                    </Link>
                    {/* <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
                </div>
            </div>
        </div>

        {/* RIGHT SIDE HERO */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />

    </div>
  )
}

export default Hero