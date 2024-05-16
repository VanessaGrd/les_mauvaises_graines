"use client";

import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import GardenerInformations from "./Modals/GardenerInformations";

interface Gardener {
  id: number;
  firstname: string;
  lastname: string;
  caution: boolean;
}
const GardenerCards = () => {
  const [gardeners, setGardeners] = useState<Gardener[]>([]);
  useEffect(() => {
    async function getGardeners() {
      const { data, error } = await supabase.from("Gardener").select("*");

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        console.log(data);
        setGardeners(data);
      }
    }

    getGardeners();
  }, []);

  function isValid(caution: boolean) {
    return caution;
  }

  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-9 h-full place-items-center">
      {gardeners.map((gardener, index) => (
        <button
          className="bg-secondary-50 text-primary-50 items-center flex justify-around w-full h-full  rounded-md "
          key={index}
        >
          {gardener.lastname} {gardener.firstname}
          <div
            className={`w-3 h-3 rounded-full ${
              isValid(gardener.caution) ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </button>
      ))}
    </div>
  );
  <GardenerInformations gardenerInformations={gardeners}/>
};

export default GardenerCards;
