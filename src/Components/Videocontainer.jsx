import { YouTube_Videos_Api } from "../Utils/Constant";
import useVideos from "../Utils/usevideoapi";
import Shimmer from "./Shimmer";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  // we called api here bcz we need data of videos here
  // video have no data here after re-rendering setvideos give all json data to video

  // using only async await
  // const getvideos = async () => {
  //      const data = await fetch(YouTube_Videos_Api)
  //      const json_data = await data.json()
  //      setVideos(json_data.items)
  // }

  // using .then and .catch
  // const getvideos = () => {
  //   fetch(YouTube_Videos_Api)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setVideos(data.items)
  //   })
  //   .catch((error)=>{
  //     console.log("error detected",error);
  //   })
  // }

  // using try catch with async await
  // const getvideos = async () =>{
  //   try{
  //     const response = await fetch(YouTube_Videos_Api)
  //     const json_data = await response.json()
  //      setVideos(json_data.items)
  //   }
  //   catch(error){
  //      console.log("error detected",error);
  //   }
  // }

  const { videos, error, loading } = useVideos();

  //  if (error) return <p>Error loading videos.</p>;
  if (loading) return <Shimmer />;

  return error ? (
    <p>Error loading videos.</p>
  ) : (
    <div className="flex flex-wrap ml-24">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
    // we have written {"/watch?v="+video.id} in link to make the card clickable and redirect to the watch page and get the information of id of that perticular card
  );
};

export default Videocontainer;
