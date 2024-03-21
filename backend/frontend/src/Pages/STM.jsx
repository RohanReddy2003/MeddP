import React from 'react'
import img from '../assets/hehe.png'
import img2 from '../assets/left_img.png'
import bg from '../assets/Background.png'
import bg2 from '../assets/Pattern.png'
import { IoMdImages } from "react-icons/io";


const STM = () => {

  const handleOnSubmit=async()=>{
    let response=await fetch('http://127.0.0.1:8000/predict_disease/predict/scan_image',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },

    })
  }

  return (
    <>
        <div>
          {/* <img className='w-1/2  z-10' src={bg} alt="" /> */}
          <div className="container m-auto mt-7 z-0 relative">
            <img src={bg2} alt="" className=' absolute' />
            <img src={bg} alt="" className=' absolute' style={{zIndex:-1,width:600,right:0,top:0}} />
            <div className='flex justify-around items-center'>
              <div className="instructions">
                <img className=' w-96' src={img} alt="" />
              </div>
              <div className="img">
                <img className='w-72' src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleOnSubmit}>
            <label>
              <div className='border-dashed border-2 border-blue-500 m-10 rounded-lg flex flex-col justify-center items-center p-10'>
              <h1 className='font-bold text-blue-500'>Add Photo</h1>
                <IoMdImages className='text-6xl text-blue-300' />
                <p className='text-blue-500 text-sm'>Drag and drop or <span className='font-bold'>browse</span> to upload</p>
                <p className=' font-light text-sm text-blue-500'>PNG,JPG,JPEG,GIF upto 10MB</p>
                <input type="file" accept="image/*" className='hidden' name='medicine_image' />
              </div>
              
            </label>
              <div className=' flex justify-center items-center'>
                      <button type='submit' class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-blue-100 border border-gray-100 rounded-lg shadow-inner group w-11/12 mb-5">
                      <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-blue-600 group-hover:w-full ease"></span>
                      <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-blue-600 group-hover:w-full ease"></span>
                      <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease"></span>
                      <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-blue-400 group-hover:h-full ease"></span>
                      <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-400 opacity-0 group-hover:opacity-100"></span>
                      <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Scan</span>
                    </button>
              </div>
          </form>
        </div>
    </>
  )
}

export default STM