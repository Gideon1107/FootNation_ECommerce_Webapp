import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Footnation, where passion for sneakers meets a commitment to quality and style. Founded with a love for footwear and street culture, we set out to create a place where sneaker enthusiasts can find the freshest releases and timeless classics, all in one place.At Footnation, we believe sneakers are more than just shoes—they&apos;re a statement, a lifestyle, and a form of self-expression. </p>
            <p>That&apos;s why we work tirelessly to curate a selection that features both cutting-edge designs and iconic silhouettes. Whether you&apos;re chasing the latest drops or looking to elevate your everyday look, we&apos;ve got you covered. Our mission is simple: to bring you the best sneakers from top brands, offer unbeatable prices, and provide a seamless shopping experience. We&apos;re here to serve the sneaker community and celebrate the culture we all love. From streetwear to sportswear, Footnation is your ultimate sneaker destination. Step up your game with Footnation—where every pair tells a story.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to fuel your passion for sneakers by offering the latest trends, exclusive drops, and timeless classics. We are dedicated to providing an exceptional shopping experience, bringing together quality, style, and affordability—all while celebrating the vibrant sneaker culture.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you along the way, ensuring your satisfaction is our priority. </p>
        </div>
      </div>

    <NewsletterBox/>
    </div>
  )
}

export default About