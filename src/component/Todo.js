import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import Card from "./Card";
import { MdDone } from "react-icons/md";
import Input from "./Input";
export default function Todo() {
  const [display, setdisplay] = useState(false);

  const [note, setnote] = useState("");
  const [des, setdes] = useState("");
  const [color, setcolor] = useState("bg-red-200");
  const [warn, setwarn] = useState(false);
  const [date, setdate] = useState();
  const [Priority, setpriority] = useState();
  const todolist = [
    {
      title: "Learn Node.js",
      description: "Start learning node.js for backend devlopment",
      backg: "bg-red-200",
      PriorityLevel: ["medium", "bg-green-500"],
    },
    {
      title: "Make a Fullstack app",
      description: "After learning backend try to make a fullstack app",
      backg: "bg-red-200",
      PriorityLevel: ["low", "bg-yellow-500"],
    }
  ];
  const [list, setlist] = useState(todolist);
  const addnote = (e) => {
    if (note.length > 1) {
      const value = {
        title: note,
        description: des,
        backg: color,
        target: date,
        PriorityLevel: Priority,
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
  const editoption = (item) => {
    item.title = "pagol";
    item.deleteOption = "chagol";
    return item;
  };
  return (
    <div className="mx-auto justify-center max-h-screen w-full overflow-scroll h-screen">
      <div className="text-2xl text-center font-bold sticky top-0 z-50  flex justify-center  bg-slate-200">
        <h1 className="text-center font-mono">
          {" "}
         Todo <span className="font-extralight">{list.length}</span>
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
              done={<MdDone />}
            />
          </div>
        );
      })}

      <Input
        warns={warn}
        displays={display}
        warn={() => {
          setwarn(false);
        }}
        color1={() => {
          setcolor("bg-red-200");
        }}
        color2={() => {
          setcolor("bg-green-200");
        }}
        color3={() => {
          setcolor("bg-yellow-200");
        }}
        color4={() => {
          setcolor("bg-cyan-200");
        }}
        displayset={() => {
          setdisplay(false);
        }}
        titleset={(e) => {
          setnote(e.target.value);
        }}
        desset={(e) => {
          setdes(e.target.value);
        }}
        addnote={addnote}
        date={(e) => {
          setdate(e.target.value);
        }}
        low={() => {
          setpriority(["low", "bg-yellow-500"]);
        }}
        medium={() => {
          setpriority(["medium", "bg-green-500"]);
        }}
        high={() => {
          setpriority(["high", "bg-red-500"]);
        }}
      />
    </div>
  );
}
