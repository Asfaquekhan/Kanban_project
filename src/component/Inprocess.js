import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import Card from "./Card";
import { MdDone } from "react-icons/md";
export default function Inprocess() {
  
  const todolist = [
    {
      title: "Master React.js",
      description: "Enhace React.js skill ",
      backg: "bg-red-200",
      PriorityLevel: ["high", "bg-red-500"],
    },
  ];
  const [list, setlist] = useState(todolist);
  
  const deleteOption = (item) => {
    setlist(
      list.filter((element) => {
        return element.title !== item;
      })
    );
  };
  const editoption = (item) => {
    item.title = "pagol";
    item.deleteOption = "chagol";
    return item;
  };
  return (
    <div className="mx-auto justify-center h-screen w-full overflow-scroll ">
      <div className="text-2xl text-center font-bold sticky top-0 z-50  flex justify-center  bg-slate-200">
        <h1 className="text-center font-mono">
          {" "}
          In process <span className="font-extralight">{list.length}</span>
        </h1>

        <button
          type="button"
          className={"items-center ml-12"}
         
        >
          <GrAddCircle size={20} />
        </button>
      </div>
    
      {list.map((curr, pos) => {
        return (
          <div key={pos}>
            <Card
              priority={curr.PriorityLevel[0]}
              typecolor={curr.PriorityLevel[1]}
              editFunction={() => {
                editoption(curr);
              }}
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
              done={<MdDone onClick={()=>{console.log("Done")}}/>}
            />
          </div>
        );
      })}

      
    </div>
  );
}
