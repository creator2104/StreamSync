import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-4 whitespace-nowrap py-2 m-5 bg-gray-200 hover:bg-gray-300 cursor-pointer font-mono rounded-xl'>{name}</button>
    </div>
  )
}

export default Button