import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle,AiOutlineEdit } from "react-icons/ai";
import {GrAddCircle} from "react-icons/gr"
import Card from "./Card";
import {MdDone} from 'react-icons/md'
import Input from "./Input";
export default function Inprocess() {
  const [display, setdisplay] = useState(false);
  const [note, setnote] = useState("");
  const [des, setdes] = useState();
  const [warn,setwarn]=useState(false)
  const [color,setcolor]=useState("bg-red-200");
  const todolist=[{
    title: "Master React.js",
    description:"Enhace React.js skill ",
    backg:"bg-red-200"
  }
  ]
  const [list, setlist] = useState(todolist);
  const addnote = (e) => {
    if (note.length > 1) {
      const value = {
        title: note,
        description: des,
        backg: color,
      };

      e = [...list, value];
      setlist(e);
    } else {
      setwarn(true);
    }
  };
 const deleteOption=(item)=>{
  setlist(
    list.filter((element) => {
      return element.title !== item;
    })
  );
 }
  return (
    <div className="mx-auto justify-center max-h-screen w-full overflow-scroll ">
      <div className="text-2xl text-center font-bold sticky top-0 z-50  flex justify-center ">
        <h1 className="text-center font-mono"> In process <span  className="font-extralight">{list.length}</span></h1>
       
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
           
            edit={<AiOutlineEdit/>}
            delete={<AiOutlineCloseCircle onClick={(()=>{deleteOption(curr.title)})}/>}
            done={<MdDone/>}/>
            
          
          </div>
        );
      })}

     <Input
       warns={warn}
       displays={display}
       warn={() => { setwarn(false); }}
       color1={() => {setcolor("bg-red-200");}}
       color2={() => {setcolor("bg-green-200");}}
       color3={() => {setcolor("bg-yellow-200");}}
       color4={() => { setcolor("bg-cyan-200");}}
       displayset={() => {setdisplay(false);}}
       titleset={(e) => {setnote(e.target.value);}}
       desset={(e) => {setdes(e.target.value);}}
       addnote={addnote}/>

     
    </div>
  );
}
