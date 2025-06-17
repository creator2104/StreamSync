// useRef is a React hook that lets you reference a value that's not needed for rendering

import React, { useRef, useState } from "react";


const Demo2 = () => {
    const[y,sety] = useState(0)
    let x = 10;
    const ref = useRef(0)
   return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className=" bg-green-200 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x="+x);
            // it will update the value but doesnt update on UI 
          }}
        >
          Increase x
        </button>
        </div>
        <div>
        <button
          className=" bg-green-200 p-2 m-4"
          onClick={() => {
            sety(y+1)
            //whenever state variable updates the let value will be reassign to 10   
            //It works like a normal js func when js func is called new execution context and memory is created 
            // and also in react the state variable updates new memory context is created for variables 
            // i want a variable when i update the state it should hold the value in it - useRef
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">state = {y}</span>
      </div>
       <div>
        <button
          className=" bg-green-200 p-2 m-4"
          onClick={() => {
            ref.current += 1
            console.log("ref="+ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
