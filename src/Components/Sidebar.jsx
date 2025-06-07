import { useSelector } from "react-redux"

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen)
    // Early Return pattern
    // if (!isMenuOpen) return null;
  return !isMenuOpen ? null : (
    <div className='w-48 p-5 shadow-lg'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
    </div>
  )
}

export default Sidebar

// hamburger is used for toggling sidebar show/hide the data
// we wanna create it on header touch and body to show and hide and also wanna show on diffrent pages of app so for that purpose we will use redux store to move our state to globel place