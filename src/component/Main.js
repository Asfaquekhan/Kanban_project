import React from 'react'
import Finished from './Finished'
import Inprocess from './Inprocess'
import Todo from './Todo'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Main() {
  return (
    <div className='md:grid grid-cols-3  md:max-h-screen'>
      <div className='hidden md:absolute z-40'>
        
      <AiOutlineMenu/>
      </div>
      
      <Todo/>
      <Inprocess/>
      <Finished/>
    </div>
  )
}
