import React from 'react'
import { User_icon } from '../Utils/Links'

const Chatmsg = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
       <img
              src={User_icon}
              alt="user-icon"
              className="h-8 mx-2 p-[3px] mt-1 cursor-pointer"
            />
        <span className='font-bold px-2'>{name}</span>    
        <span>{message}</span>    
    </div>
  )
}

export default Chatmsg