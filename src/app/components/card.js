import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Card = ({id,title,description,deleteItem}) => {
  return (
    <Link href={`crudbyapi/${id}`} className=" bg-slate-700 text-white p-6 rounded-md flex items-center justify-between">
      <div>
        <h1 className=" text-xl font-semibold mb-4">{title}</h1>
        <p className=" text-sm">{description}</p>
      </div>
      <div className=" flex items-center gap-4">
        <span onClick={()=>deleteItem(id)}>
          <MdDelete size={24} className=" text-red-700" />
        </span>
        <span>
          <MdEdit size={24}  />
        </span>
      </div>
    </Link>
  );
};

export default Card;
