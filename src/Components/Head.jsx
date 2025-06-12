import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../Utils/Appslice";
import {
  Hamburger_svg,
  Notification_icon,
  User_icon,
  yt_logo,
} from "../Utils/Links";
import { useEffect, useState } from "react";
import { youtube_Search_Api } from "../Utils/Constant";
import { cacheResults } from "../Utils/Searchslice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // make an api call after every key pressed
    // but if the difference between 2 api calls is <200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // If you don't clear the timer and the component gets unmounted, the callback might still try to run — even though the component is gone. This can lead to memory leaks or errors like:
    // If you set multiple timeouts without clearing the old ones, you might trigger multiple callbacks unintentionally — causing UI glitches or duplicated logic.
    return () => {
      clearTimeout(timer); //cleanup
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    console.log("API CALL" + searchQuery);
    const data = await fetch(youtube_Search_Api + searchQuery);
    const json = await data.json();
    setsuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className="flex shadow-lg">
      <div className="flex">
        <img
          src={Hamburger_svg}
          alt="menu"
          onClick={() => toggleMenuHandler()}
          className="ml-2 h-12 hover:bg-gray-200 hover:rounded-4xl my-1 mt-2 cursor-pointer"
        />
        <img
          src={yt_logo}
          alt="youtube-logo"
          className="h-18 mt-1 cursor-pointer"
        />
      </div>
      <div className="relative p-2 mx-50 w-7/12">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-3/4 h-10 mt-2 border border-gray-300 rounded-l-full px-4 hover:border-gray-400 focus:outline-none focus:border-gray-500 "
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setshowsuggestions(true)}
            onBlur={() => setshowsuggestions(false)}
            // When you type into an input, React stores the value in a state variable so it can:
            // Re-render when the input changes
            // Use that value in other parts of the component (e.g., send it to an API)
          />
          <button className="bg-gray-200 rounded-r-full h-10 cursor-pointer px-4 hover:bg-gray-300">
            Search
          </button>
        </div>
        {showsuggestions && (
          <div className="absolute bg-white py-2 px-2 cursor-pointer w-[560px] rounded-lg ml-0.5 shadow-xl border border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-3 hover:bg-gray-100 hover:rounded-lg px-2"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="m-2 p-2 flex mr-4">
        <button className="bg-gray-200 rounded-xl cursor-pointer mr-2 mb-2 px-4 py-1 hover:bg-gray-300 ">
          +Create
        </button>
        <img
          src={Notification_icon}
          alt="Notification_icon"
          className="h-8 cursor-pointer mt-1 hover:bg-gray-200
         hover:rounded-4xl p-1"
        />
        <img
          src={User_icon}
          alt="user-icon"
          className="h-8 mx-2 p-[3px] mt-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;

// 🔁 How useEffect Works on Input Change
// Let’s say the user types hello, letter by letter:

// 1️⃣ User types h
// searchQuery = "h" → component re-renders
// useEffect runs
// setTimeout() is scheduled → getSearchSuggestions() will run in 200ms
// ✅ React stores the timer ID inside timer
// Time , Tide and js waits for none

// 2️⃣ Before 200ms passes, user types he
// searchQuery = "he" → component re-renders
// ⚠️ Before the new useEffect runs, React first runs the cleanup of the previous effect
// return () => {
//   clearTimeout(timer); // ← this is what runs
// }
// So, clearTimeout(timer) cancels the previous setTimeout
// Now, a new timer is created for "he"

// 3️⃣ Same for hel, hell, hello
// Each keystroke causes:
// setTimeout() (scheduled for 200ms)
// Cleanup of previous one via clearTimeout()
// So the previous timer is always destroyed unless the user stops typing for 200ms.

// ⏱️ When will the timer NOT be cleared?
// If the user types hello and then waits, no further state changes happen, and:
// The latest setTimeout gets to complete its 200ms
// getSearchSuggestions() finally runs
