import React from "react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Edit(props) {
  const [title, setTitle] = useState();
  const [des, setDes] = useState("");
  const [color, setcolor] = useState("bg-red-200");
  const [warn, setwarn] = useState(false);
  const [date, setdate] = useState();
  const [Priority, setpriority] = useState(["", "white"]);
  const navigate = useNavigate();
  const submitall = () => {
    if (title.length > 1) {
      axios
        .put(`https://638ea85a4ddca317d7e32bf5.mockapi.io/todo/4`, {
          title: title,
          description: des,
          backg: color,
          target: date,
          PriorityLevel: Priority,
        })
        .then(() => {
          navigate("/");
        });
    } else {
      setwarn(true);
    }
  };
  return (
    <div className="max-w-[800px] mx-auto h-screen">
      <div
        className={
          warn
            ? ` p-4 flex justify-around mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800`
            : "hidden"
        }
        role="alert"
      >
        <p>
          <span className="font-medium">Invalid Title!</span> Add some Title and
          try to add again.
        </p>
        <p>
          <AiOutlineCloseCircle onClick={props.warn} />
        </p>
      </div>
      <div className={"w-full block mx-auto border-stone-700 sticky top-0"}>
        <div className="items-center m-3 p-3">
          <div className="flex justify-between items-center">
          <label
            htmlFor="small-input"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          
          <button
            className="bg-red-200 w-4 h-4 rounded-full"
            onClick={() => {
              setcolor("bg-red-200");
            }}
          ></button>
          <button
            className="bg-green-200 w-4 h-4 rounded-full"
            onClick={() => {
              setcolor("bg-green-200");
            }}
          ></button>
          <button
            className="bg-yellow-200 w-4 h-4 rounded-full"
            onClick={() => {
              setcolor("bg-yellow-200");
            }}
          ></button>
          <button
            className="bg-cyan-200 w-4 h-4 rounded-full"
            onClick={() => {
              setcolor("bg-cyan-200");
            }}
          ></button>
          </div>
          <div >
          <input
          type="text"
          id="small-input"
          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
          </div>
        </div>
        <div className="m-3 p-3">
        <label
          htmlFor="small-input"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="small-input"
          className="block p-8 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        </div>
        <div className="m-3 p-3">
          <h1 className="block mb-2 font-medium text-gray-900 dark:text-white">
            Choose Priority level
          </h1>
          <div className="flex justify-around py-3">
            <button
              onClick={() => {
                setpriority(["Low", "bg-yellow-500"]);
              }}
              className="mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center bg-yellow-500"
            >
              Low
            </button>
            <button
              onClick={() => {
                setpriority(["Medium", "bg-green-500"]);
              }}
              className="mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center bg-green-500 "
            >
              Medium
            </button>
            <button
              onClick={() => {
                setpriority(["High", "bg-red-500"]);
              }}
              className="mb-2 text-xs tracking-tight  border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200  rounded-lg  px-3 py-2 mr-2 items-center bg-red-500"
            >
              high
            </button>
          </div>
        </div>
        <div className="m-3 p-3">
          <span className="block mb-2 font-medium text-gray-900 dark:text-white">
            Target Date
          </span>
          <input
            type="date"
            name=""
            id=""
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
        </div>

        <button
          onClick={submitall}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  "
        >
          Add
        </button>
      </div>
    </div>
  );
}

