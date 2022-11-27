import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import Card from "./Card";
import Input from "./Input";


export default function Finished() {
  const [display, setdisplay] = useState(false);
  const [list, setlist] = useState([]);
  const [note, setnote] = useState("");
  const [des, setdes] = useState("");
  const [color, setcolor] = useState("bg-red-200");
  const [warn, setwarn] = useState(false);
  const [date,setdate]=useState()
  const [Priority,setpriority]=useState()

  const addnote = (e) => {
    if (note.length > 1) {
      const value = {
        title: note,
        description: des,
        backg: color,
        target:date,
        PriorityLevel:Priority
      };

      e = [...list, value];
      setlist(e);
    } else {
      setwarn(true);
    }
  };
  const deleteOption = (item) => {
    setlist(
      list.filter((element) => {
        return element.title !== item;
      })
    );
  };
  const editoption =(item)=>{
     item.title="pagol"
     item.deleteOption="chagol"
     return item
    
  }
  return (
    <div className="mx-auto justify-center max-h-screen w-full overflow-scroll ">
      <div className="text-2xl text-center font-bold sticky top-0 z-50  flex justify-center ">
        <h1 className="text-center font-mono">
          {" "}
          Finished <span className="font-extralight">{list.length}</span>
        </h1>

        <button
          type="button"
          className={display ? "hidden" : "items-center ml-12"}
          onClick={() => {
            setdisplay(true);
          }}
        >
          <GrAddCircle size={20} />
        </button>
      </div>
      {list.map((curr, pos) => {
        return (
          <div key={pos}>
            <Card
            priority={curr.PriorityLevel}
            editFunction={(()=>{editoption(curr)})}
            date={curr.target}
              title={curr.title}
              des={curr.description}
              bgColor={curr.backg}
              delete={
                <AiOutlineCloseCircle
                  onClick={() => {
                    deleteOption(curr.title);
                  }}
                />
              }
              edit={<AiOutlineEdit />}
            />
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
       addnote={addnote}
       date={(e) => {setdate(e.target.value);}}
       low={() => {setpriority("low");}}
       medium={() => {setpriority("medium");}}
       high={() => {setpriority("high");}}
       />
      </div>
   
  );
}
