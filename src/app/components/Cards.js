import React from "react";
import Card from "./card";

const Cards = ({datas,deleteItem}) => {
  
  return <div className=" flex flex-col gap-4">
    {
      datas.map((data)=>{
        return <Card key={data.id} title={data.title} description={data.description} id={data.id} deleteItem={deleteItem} />
      })
    }

  </div>;
};

export default Cards;
