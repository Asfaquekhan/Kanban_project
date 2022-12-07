import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import Card from "./Card";
import { MdDone } from "react-icons/md";
import axios from "axios";
import Edit from './Edit'
import { Link } from "react-router-dom";


export default function Todo() {
 
  const [list, setlist] = useState([]);
 
 
    useEffect(() => {
      axios
        .get("https://638ea85a4ddca317d7e32bf5.mockapi.io/todo")
        .then((res) => {
          setlist(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("hello");
    }, []);

    const deleteO = (item) => {
      axios
        .delete(`https://638ea85a4ddca317d7e32bf5.mockapi.io/todo/${item.id}`)
        .then(() => {
          axios
            .get("https://638ea85a4ddca317d7e32bf5.mockapi.io/todo")
            .then((res) => {
              setlist(res.data);
            });
        });

      console.log(item.id);
    };

    const editoption = (item) => {
     
      <Edit update={item.id}/>
    };
  
  return (
    <div className="mx-auto justify-center max-h-screen w-full overflow-scroll h-screen">
      <div className="text-2xl text-center font-bold sticky top-0 z-50  flex justify-center  bg-slate-200">
        <h1 className="text-center font-mono">
          {" "}
          Todo <span className="font-extralight">{list.length}</span>
        </h1>
        <Link to="create">
          <button className={"items-center ml-12"}>
            <GrAddCircle size={20} />
          </button>
        </Link>
      </div>

      { list &&
        list.map((curr, pos) => {
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
                      deleteO(curr);
                    }}
                  />
                }
                edit={
                  <AiOutlineEdit
                    onClick={() => {
                      editoption(curr);
                    }}
                  />
                }
                done={
                  <MdDone
                    onClick={() => {
                      console.log("Done");
                    }}
                  />
                }
              />
            </div>
          );
        })}
     
    </div>
  );
}
