import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    // Early Return pattern
    // if (!isMenuOpen) return null;
  return !isMenuOpen ? null : (
    <div className='w-64 p-5 shadow-lg sticky top-0 bg-white'>
          <ul className="space-y-1">
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Shorts</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Videos</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Music</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Sports</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Movies</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Movies</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Namaste</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Devtech</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Javascript</li>
      </ul>

      <h1 className="font-bold pt-5">Liked Videos</h1>
      <ul className="space-y-1">
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Akshay</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Shorts</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">DSA</li>
        <li className="hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">Python</li>
      </ul>
    </div>
  )
}

export default Sidebar

// hamburger is used for toggling sidebar show/hide the data
// we wanna create it on header touch and body to show and hide and also wanna show on diffrent pages of app so for that purpose we will use redux store to move our state to globel place