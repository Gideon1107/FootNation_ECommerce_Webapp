import React, {useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
      let productsCopy = products.slice();
      if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
      }

      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      }

      setFilterProduct(productsCopy);
  }


  useEffect(() => {
    applyFilter()
  },[category,subCategory])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter options */}
      <div className='min-w-60'>
        <p  onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden' } sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'}  onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>  
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden' } sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Classic-trainers'} onChange={toggleSubCategory}/> Classic Trainers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Trainers'} onChange={toggleSubCategory}/> Trainers
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Flip-flops'} onChange={toggleSubCategory}/> Flip-Flops
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Boots'} onChange={toggleSubCategory}/> Boots & Shoes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Hi-tops'} onChange={toggleSubCategory}/> Hi-Tops
            </p>
          </div>  
        </div>

      </div>

      {/* Right side of collection */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>

          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Recommended</option>
            <option value="low-high">Sort by: Price (Low to High)</option>
            <option value="high-low">Sort by: Price (High to Low)</option>
          </select>
        </div>

        {/* Map Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
           {
            filterProduct.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
           }
        </div>

      </div>

    </div>
  )
}

export default Collection