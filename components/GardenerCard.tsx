"use client";

import { useEffect, useState } from "react";
import GardenerInformations from "./Modals/GardenerInformations";

interface Gardener {
  id: number;
  firstname: string;
  lastname: string;
  caution: boolean;
  tel: number;
  mail: string;
  cotisation: boolean;
  assurance: boolean;
}
interface EventCount {
  type1: number;
  type2: number;
}

interface Event {
  id: number;
  name: string;
  date: string;
  hour: string;
  type: number;
}
interface EventDetails {
  name: string;
  date: string;
}
interface EventName {
  name1: EventDetails[];
  name2: EventDetails[];
}
const GardenerCards = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedGardener, setSelectedGardener] = useState<Gardener | null>(
    null
  );
  const [gardeners, setGardeners] = useState<Gardener[]>([]);
  const [eventType, setEventType] = useState<EventCount>({
    type1: 0,
    type2: 0,
  });
  const [eventName, setEventName] = useState<EventName>({
    name1: [],
    name2: [],
  });
  useEffect(() => {
    async function getGardeners() {
      try {
        const response = await fetch("/api/gardener");
        const data = await response.json();
        setGardeners(data);
      } catch (error) {
        console.error("Failed to fetch gardener:", error);
      }
    }
    getGardeners();
  }, []);

  async function getEventsByGardener(gardenerId: number) {
    try {
      const response = await fetch(`/api/event?gardenerId=${gardenerId}`);
      const data = await response.json();
      console.log(data);
      const nameType1 = data
        .filter((event: Event) => event.type === 1)
        .map((event: Event) =>({name : event.name, date: event.date}));
      const countType1 = nameType1.length;

      const nameType2 = data
        .filter((event: Event) => event.type === 2)
        .map((event: Event) => ({name : event.name, date: event.date}));
      console.log(nameType1);
      const countType2 = nameType2.length;

      setEventType({ type1: countType1, type2: countType2 });
setEventName({name1: nameType1, name2: nameType2});
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  }

  const handleOpenModal = (gardener: Gardener) => {
    setSelectedGardener(gardener);
    setOpenModal(true);
    getEventsByGardener(gardener.id);
  };

  function isValid(caution: boolean) {
    return caution;
  }

  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-9 h-full place-items-center">
      {gardeners.map((gardener, index) => (
        <button
          onClick={() => handleOpenModal(gardener)}
          className="bg-secondary-50 text-primary-50 items-center flex justify-around w-full h-full rounded-md"
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
      {openModal && selectedGardener && (
        <GardenerInformations
          gardenerInformations={selectedGardener}
          handleCloseModal={() => setOpenModal(false)}
          isValid={isValid}
          eventType={eventType}
          eventName={eventName}
        />
      )}
    </div>
  );
};

export default GardenerCards;
