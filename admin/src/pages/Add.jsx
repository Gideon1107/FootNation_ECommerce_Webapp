import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {


    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [info, setInfo] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Trainers");
    const [bestseller, setBestseller] = useState(false)
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const toastSetting ={
            hideProgressBar: true,
            autoClose: 2000
          }

        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("info", info)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)
            
            const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: {token}})

            if (response.data.success) {
                toast.success(response.data.message, toastSetting)
                setName("")
                setDescription("")
                setInfo("")
                setPrice("")
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setSizes([])
            } else {
                toast.error(response.data.message, toastSetting)
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message, toastSetting)
        }
    }




  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        <div>
            <p className='mb-2'>Upload Image</p>

            <div className='flex gap-2'>
                <label htmlFor="image1">
                    <img className='w-20 cursor-pointer border active:border-green-500' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                    <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
                </label>

                <label htmlFor="image2">
                    <img className='w-20 cursor-pointer border active:border-green-500' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                    <input onChange={(e) => setImage2(e.target.files[0])} type="file" id='image2' hidden />
                </label>

                <label htmlFor="image3">
                    <img className='w-20 cursor-pointer border active:border-green-500' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                    <input onChange={(e) => setImage3(e.target.files[0])} type="file" id='image3' hidden />
                </label>

                <label htmlFor="image4">
                    <img className='w-20 cursor-pointer border active:border-green-500' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                    <input onChange={(e) => setImage4(e.target.files[0])} type="file" id='image4' hidden />
                </label>
            </div>
        </div>

        <div className='w-full'>
            <p className='mb-1'>Product name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 placeholder:text-sm' type="text"  placeholder='Type here' required/>
        </div>


        <div className='w-full'>
            <p className='mb-1'>Product description</p>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2 placeholder:text-sm' type="text"  placeholder='Write content here' required/>
        </div>

        <div className='w-full'>
            <p className='mb-1'>Product Information</p>
            <textarea onChange={(e) => setInfo(e.target.value)} value={info} className='w-full max-w-[500px] px-3 py-2 placeholder:text-sm' type="text"  placeholder='Write content here' required/>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
                <p className='mb-2'>Product category</p>
                <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            <div>
                <p className='mb-2'>Sub-category</p>
                <select  onChange={(e) => setSubCategory(e.target.value)}  className='w-full px-3 py-2'>
                    <option value="Trainers">Trainers</option>
                    <option value="Classic-trainers">Classic Trainers</option>
                    <option value="Flip-flops">Flip-Flops</option>
                    <option value="Boots">Boots & Shoes</option>
                    <option value="Hi-tops">Hi-Tops</option>
                </select>
            </div>

            <div>
                <p className='mb-2'>Product Price</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' min={1}/>
            </div>
        </div>

        <div>
            <p className='mb-2'>Product Sizes</p>
            <div className='flex flex-wrap gap-3'>
                <div onClick={() => setSizes(prev => prev.includes("2") ? prev.filter(item => item !== "2") : [...prev, "2"])}>
                    <p className={` text-center ${sizes.includes("2") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>2</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("2.5") ? prev.filter(item => item !== "2.5") : [...prev, "2.5"])}>
                    <p className={` text-center ${sizes.includes("2.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>2.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("3") ? prev.filter(item => item !== "3") : [...prev, "3"])}>
                    <p className={` text-center ${sizes.includes("3") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>3</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("3.5") ? prev.filter(item => item !== "3.5") : [...prev, "3.5"])}>
                    <p className={` text-center ${sizes.includes("3.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>3.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("4") ? prev.filter(item => item !== "4") : [...prev, "4"])}>
                    <p className={` text-center ${sizes.includes("4") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>4</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("4.5") ? prev.filter(item => item !== "4.5") : [...prev, "4.5"])}>
                    <p className={` text-center ${sizes.includes("4.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>4.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("5") ? prev.filter(item => item !== "5") : [...prev, "5"])}>
                    <p className={` text-center ${sizes.includes("5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("5.5") ? prev.filter(item => item !== "5.5") : [...prev, "5.5"])}>
                    <p className={` text-center ${sizes.includes("5.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>5.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("6") ? prev.filter(item => item !== "6") : [...prev, "6"])}>
                    <p className={` text-center ${sizes.includes("6") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>6</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("6.5") ? prev.filter(item => item !== "6.5") : [...prev, "6.5"])}>
                    <p className={` text-center ${sizes.includes("6.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>6.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("7") ? prev.filter(item => item !== "7") : [...prev, "7"])}>
                    <p className={` text-center ${sizes.includes("7") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>7</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("7.5") ? prev.filter(item => item !== "7.5") : [...prev, "7.5"])}>
                    <p className={` text-center ${sizes.includes("7.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>7.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("8") ? prev.filter(item => item !== "8") : [...prev, "8"])}>
                    <p className={` text-center ${sizes.includes("8") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>8</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("8.5") ? prev.filter(item => item !== "8.5") : [...prev, "8.5"])}>
                    <p className={` text-center ${sizes.includes("8.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>8.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("9") ? prev.filter(item => item !== "9") : [...prev, "9"])}>
                    <p className={` text-center ${sizes.includes("9") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>9</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("9.5") ? prev.filter(item => item !== "9.5") : [...prev, "9.5"])}>
                    <p className={` text-center ${sizes.includes("9.5") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>9.5</p>
                </div>

                <div onClick={() => setSizes(prev => prev.includes("10") ? prev.filter(item => item !== "10") : [...prev, "10"])}>
                    <p className={` text-center ${sizes.includes("10") ? "bg-green-300" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>10</p>
                </div>
            </div>
        </div>

        <div className='flex gap-2 mt-2'>
            <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
            <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
        </div>

        <button type='submit' className='w-28 py-3 mt-4 bg-black text-white active:bg-gray-700'>ADD</button>
    </form>
  )
}


export default Add