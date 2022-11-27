import React from 'react'
import { AiOutlineCloseCircle} from "react-icons/ai";
export default function Input(props) {
  return (
    <div>
      <div
        className={
            props.warns
            ? ` p-4 flex justify-around mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800`
            : "hidden"
        }
        role="alert"
      >
        <p>
          <span className="font-medium">Invalid Title!</span> Add some Title and
          try to add again.
        </p>
        <p>
          <AiOutlineCloseCircle
            onClick={props.warn}
          />
        </p>
      </div>
      <div
        className={
          props.displays
            ? "w-full block mx-auto border-stone-700 p-2 m-2 sticky top-0"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center">
          <label
            htmlFor="small-input"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <button
            className="bg-red-200 w-4 h-4 rounded-full"
            onClick={props.color1}
          ></button>
          <button
            className="bg-green-200 w-4 h-4 rounded-full"
            onClick={props.color2}
          ></button>
          <button
            className="bg-yellow-200 w-4 h-4 rounded-full"
            onClick={props.color3}
          ></button>
          <button
            className="bg-cyan-200 w-4 h-4 rounded-full"
            onClick={props.color4}
          ></button>
          <button
            onClick={props.displayset}
            className="mr-2"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <input
          type="text"
          id="small-input"
          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={props.titleset}
        />
        <label
          htmlFor="small-input"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="small-input"
          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={props.desset}
        />
        <div>
        <h1 className='block mb-2 font-medium text-gray-900 dark:text-white'>Choose Priority level</h1>
        <div className='flex justify-around'>
            
            <button onClick={props.low} className='mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center bg-yellow-500'>low</button>
            <button onClick={props.medium} className='mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center bg-green-500 '>medium</button>
            <button onClick={props.high} className='mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center bg-red-500'>high</button>
        </div>
        </div>
       <div className=''>
       <span className='block mb-2 font-medium text-gray-900 dark:text-white'>Target Date</span><input type="date" name="" id="" onChange={props.date} />
       </div>
        
        <button
          onClick={props.addnote}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 p-2 m-2 "
        >
          Add
        </button>
       
      </div>
    </div>
  )
}
