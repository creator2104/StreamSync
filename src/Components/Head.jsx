import { Hamburger_svg, Notification_icon, User_icon, yt_logo } from '../Utils/Links'

const Head = () => {
  return (
        <div className='flex shadow-lg'>
    <div className='flex'>
        <img src={Hamburger_svg} alt="menu" className='ml-2 h-12 hover:bg-gray-200 hover:rounded-4xl p-1 my-1 mt-2 cursor-pointer'/>
        <img src={yt_logo} alt="youtube-logo" className='h-18 mt-1 cursor-pointer'/>
    </div>
    <div className='p-2 mx-50 w-7/12'>
            <input type="text" placeholder='Search' className='w-3/4 mt-2 border border-gray-400 rounded-l-full p-1 px-4 hover:border-gray-500 focus:outline-none focus:border-gray-500 focus:border-2'/>
            <button className='bg-gray-200 rounded-r-full cursor-pointer px-4 py-[5px] hover:bg-gray-300'>Search</button>
    </div>
    <div className='m-2 p-2 flex mr-4'>
         <button className='bg-gray-200 rounded-xl cursor-pointer mr-2 mb-2 px-4 py-1 hover:bg-gray-300 '>+Create</button>
         <img src={Notification_icon} alt="Notification_icon" className='h-8 cursor-pointer mt-1 hover:bg-gray-200
         hover:rounded-4xl p-1'/>
      <img src={User_icon} alt="user-icon" className='h-8 mx-2 p-[3px] mt-1 cursor-pointer'/>
    </div>
    </div>
  )
}

export default Head