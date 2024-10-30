"use client"
import  { useEffect, useState } from "react";

import { usegetsingledata } from "@/app/hooks/usegetsingledata";

const SinglePage = ({ params }) => {
  const [singleData, setSingleData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await usegetsingledata(params.id);
      setSingleData(result);
    };
    fetchData();
  }, []);

  return (
    <div className=" my-10">
      <h1 className=" text-5xl font-semibold">SinglePage</h1>
    
          <div>
            <h1 className=" text-3xl font-semibold">{singleData.title}</h1>
            <p>{singleData.title}</p>
          </div>
        
    </div>
  );
};

export default SinglePage;
