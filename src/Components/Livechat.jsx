import React, { useEffect, useState } from "react";
import Chatmsg from "./Chatmsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/Chatslice";
import { generateRandomName } from "../Utils/helper";
import { generateRandomText } from "../Utils/helper";

const Livechat = () => {
  const [LiveMessage,setLiveMessage] = useState("")
  const disPatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  // API polling
  // If u use setinterval also do clean the thing up
  useEffect(() => {
    const i = setInterval(() => {
      // console.log("Api polling");

      disPatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(1,1),
        })
      );
    },1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="w-full h-[600px] m-2 rounded-lg bg-slate-100 p-2 border border-black overflow-y-scroll flex flex-col-reverse">
      <div>
     {chatMessages.map((c,i)=><Chatmsg key={i} name={c.name} message={c.message} />)}
     </div>
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
     e.preventDefault()
     disPatch(addMessage({
      name:"Vinit",
      message:LiveMessage
     }))
     setLiveMessage("")
    }}>
      <input type="text" className="w-96 px-2 focus:outline-none" placeholder="Enter a message" value={LiveMessage}
      onChange={(e)=>{setLiveMessage(e.target.value)}}/>
          <button className="mx-2 bg-gray-200 px-3 py-[3px] rounded-lg hover:bg-gray-300 cursor-pointer">Send</button>
    </form>
    </>
  );
};

export default Livechat;
