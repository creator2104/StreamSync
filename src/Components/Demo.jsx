import React, { useMemo, useState } from "react";
import { nthPrime } from "../Utils/helper";

const Demo = () => {
  const [text, settext] = useState("");
  const [isDarkTheme, setisDarkTheme] = useState(false);
  // another way to memorize it by craeating new component and giving it the theme state variable so it would not affect at prime no state variable 

  // heavy operation
  // useMemo is a react hook that lets you cache the results of a calculation between re-renders
  // this nthprime no calculation is a heavy operation
  // const cachedvalue = useMemo(calculatevalue,dependecies)
  const prime = useMemo(() => nthPrime(text),[text])
  // memorize it and change it only when my text changes then calcukate the prime no otherwise dont
  // console.log("Rendering");
  // if i am toggling to the button of theme at that time the unnecessary state of text is being updated or prime no is being updated 
  // every time i am changing my theme my prime no is calculated which is not required
  // whenever a state variable updates react will re-render its whole component

  return (
    <div
      className={`m-4 p-2 w-96 h-96 border border-black ${
        isDarkTheme ? "bg-gray-900 text-white" : ""
      }`}
    >
      <div>
        <button
          className="m-10 p-2 bg-green-300"
          onClick={() => setisDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div>
        <h1>nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;


// useCallback - useCallback is a react hook that lets you cache a function definition between re-renders  
// const cachefn = useCallback(fn,dependecies)
//  the difference is useMemo caches the value and useCallback caches the function
