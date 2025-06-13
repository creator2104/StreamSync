import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Appslice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat.jsX";

const Watchpage = () => {
  // useparams only work on /Id not ?v=...... so we have to use useSearchParams
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  // there v is the key to search for perticular video in url
  const disPatch = useDispatch();
  // we have used useeffect bcz we wanna close the hamburger for once
  useEffect(() => {
    disPatch(closeMenu());
  }, []);
  return (
    <div className="flex-col w-full">
    <div className="px-5 flex">
      <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
        <Livechat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default Watchpage;
