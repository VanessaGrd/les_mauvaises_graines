"use client";
import React from "react";

import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [gardeners, setGardeners] = useState([]);
  useEffect(() => {
    async function getGardeners() {
      const { data, error } = await supabase.from("Gardener").select("*");

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        console.log(data)
setGardeners(data)      }
    }

    getGardeners();
  }, []);

  function isValid(caution: boolean){
 return caution
  }

  return (
    <div className="bg-primary-50  items-center h-full">
     <ul className="grid grid-cols-4 grid-rows-9 h-full place-items-center">
        {gardeners.map((gardener, index) => (
          <li
            className="bg-secondary-50 m-2 w-1/2 rounded-md flex justify-center"
            key={index}
          >
            {gardener.lastname} {gardener.firstname}
            <div
           className={`w-3 h-3 rounded-full ${
             isValid(gardener.caution) ? "bg-green-500" : "bg-red-500"
           }`}
         ></div>
          </li>
       
        ))}
        
      </ul>
     
    </div>
    
  );
};

export default Dashboard;
