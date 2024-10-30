"use client"
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import Cards from "../components/Cards";
import { usegetdata } from "../hooks/usegetdata";



const CrudApi = () => {
  const [cardData,setCardData]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await usegetdata();
      setCardData(result);
    };
    fetchData();
  }, []);


 const deleteItem=(id)=>{
 setCardData((prev)=>{
  return prev.filter((item)=>item.id !==id)
 })
}



  
  return (
    <div className=" container max-w-[800px] mx-auto flex flex-col gap-8 mt-10">
      <h1 className=" text-2xl font-bold text-center">CRUD Oparetion For GET, POST, DELETE, PATCH {cardData.length}</h1>
      <InputForm />
      <Cards datas={cardData} deleteItem={deleteItem} />
    </div>
  );
};

export default CrudApi;
