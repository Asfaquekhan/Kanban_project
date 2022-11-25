import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle,AiOutlineEdit } from "react-icons/ai";
import {GrAddCircle} from "react-icons/gr"
import Card from "./Card";

export default function Finished() {
  const [display, setdisplay] = useState(false);
  const [list, setlist] = useState([]);
  const [note, setnote] = useState();
  const [des, setdes] = useState();
  const [color,setcolor]=useState("bg-red-200");
  

  const addnote = (e) => {

    const value = {
      title: note,
      description: des,
      backg:color
    };
    
    e = [...list, value];
    setlist(e);
  }
 const deleteOption=(item)=>{
   const index =list.map((id)=>{return id.title }).indexOf(item)
   console.log(index)
   list.splice(index,1)
   setlist(list);
 }
  return (
    <div className="mx-auto justify-center max-h-screen w-full overflow-scroll ">
      <div className="text-2xl text-center font-bold sticky top-0 z-50  flex justify-center bg-red-400">
        <h1 className="text-center font-mono"> Finished <span className="font-extralight">{list.length}</span></h1>
       
        <button
        type="button"
        className={
          display
            ? "hidden"
            : "items-center ml-12"
        }
        onClick={() => {
          setdisplay(true);
        }}
      >
        <GrAddCircle size={20}/>
      </button>
      </div>
      {list.map((curr, pos) => {
        return (
          <div key={pos}>
            <Card title={curr.title} des={curr.description} bgColor={curr.backg} 
            delete={<AiOutlineCloseCircle onClick={(()=>{deleteOption(curr.title)})}/>}
            edit={<AiOutlineEdit/>}/>
          </div>
        );
      })}

      <div className={display ? "w-full block mx-auto border-stone-700 p-2 m-2 sticky top-0" : "hidden"}>
        <div className="flex justify-between items-center">
          <label
            htmlFor="small-input"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <button className="bg-red-200 w-4 h-4 rounded-full" onClick={()=>{setcolor("bg-red-200")}}></button>
          <button className="bg-green-200 w-4 h-4 rounded-full" onClick={()=>{setcolor("bg-green-200")}}></button>
          <button className="bg-yellow-200 w-4 h-4 rounded-full" onClick={()=>{setcolor("bg-yellow-200")}}></button>
          <button className="bg-cyan-200 w-4 h-4 rounded-full" onClick={()=>{setcolor("bg-cyan-200")}}></button>
          <button
            onClick={() => {
              setdisplay(false);
            }}
            className="mr-2"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
        <input
          type="text"
          id="small-input"
          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={((e) => {
            setnote(e.target.value)
          })}
        />
        <label
          htmlFor="small-input"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="small-input"
          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={((e) => {
            setdes(e.target.value)
          })}
        />
        <button
          onClick={addnote}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 p-2 m-2 "
        >
          Add
        </button>
      </div>

     
    </div>
  );
}
