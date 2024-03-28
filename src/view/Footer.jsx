import React from 'react'
import { FaHome  } from 'react-icons/fa'

const footer = () => {
  return (
    <>
      <div className='flex justify-evenly items-center text-white px-3 py-1 space-x-12 w-full  fixed left-0 bottom-0 bg-blue-400 '>
        <p> <FaHome/></p>
        <p>ຂາຍເຄື່ອງ</p>
        <p>ປະຫວັດ</p>
        <p>ຕັ້ງຄ່າ</p>
      </div>
    </>
  )
}

export default footer
