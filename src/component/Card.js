import React from 'react'



export default function Card(props) {
  return (
  <div className='block border-2 '>
    <div className='flex justify-between'>
        <h1 className={`mb-2  font-medium tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-5 py-2 mr-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 p-2 m-2 ${props.bgColor}`}>{props.title}</h1>
        <div className='flex items-center'>
       
        <p className='p-1 m-1' onClick={props.editFunction}>{props.edit}</p>
       
        <p className='p-1 m-1'>{props.delete}</p>
        <p className='p-1 m-1'>{props.done}</p>

        </div>
       
    </div>
    <div>
        <p className=' ml-6'>{props.des}</p>
        <div className='flex justify-between'>
        <button className=' ml-6 '>{props.date}</button>
        <p className={`mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center ${props.typecolor}`}>{props.priority}</p>
        </div>
       
    </div>
  </div>
  )
}
