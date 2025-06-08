import { useEffect, useState } from 'react'
import { YouTube_Videos_Api } from '../Utils/Constant'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'

const Videocontainer = () => {
  // we called api here bcz we need data of videos here 
  const [Videos,setVideos] = useState([])
  useEffect(()=>{
    getvideos()
  },[])
  const getvideos = async () => {
       const data = await fetch(YouTube_Videos_Api)
       const json_data = await data.json()
      //  console.log(json_data);
       setVideos(json_data.items)
  }
  return (
    <div className='flex flex-wrap ml-24'>
      {Videos.map((video)=>(
        <Link to={"/watch?v="+video.id}><Videocard key={video.id} info={video}/></Link>))}
    </div>
  )
}

export default Videocontainer