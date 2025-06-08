import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/Appslice";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(closeMenu());
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v")
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
