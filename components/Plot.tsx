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
interface Plot {
  id: number;
  number: number;
  gardener?: Gardener;
}
const Plot = () => {
  // States to manage the modal, the gardener who's selected, the gardeners list, the type and the name of the event which they maked
  const [openModal, setOpenModal] = useState(false);
  const [selectedGardener, setSelectedGardener] = useState<Gardener | null>(
    null
  );
  const [eventType, setEventType] = useState<EventCount>({
    type1: 0,
    type2: 0,
  });
  const [eventName, setEventName] = useState<EventName>({
    name1: [],
    name2: [],
  });
  const [plotsWithGardeners, setPlotsWithGardeners] = useState<Plot[]>([]);

  // function to get the infos to the gardeners with threir own plot
  useEffect(() => {
    async function fetchPlotsWithGardeners() {
      try {
        const response = await fetch("/api/plots_with_gardeners");
        const data = await response.json();
        setPlotsWithGardeners(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch plots with gardeners:", error);
      }
    }
    fetchPlotsWithGardeners();
  }, []);

  // function to get the events for each gardener
  async function getEventsByGardener(gardenerId: number) {
    try {
      const response = await fetch(`/api/event?gardenerId=${gardenerId}`);
      const data = await response.json();

      // to keep the number, the type and the name of the events which gardeners maked
      const nameType1 = data
        .filter((event: Event) => event.type === 1)
        .map((event: Event) => ({ name: event.name, date: event.date }));
      const countType1 = nameType1.length;

      const nameType2 = data
        .filter((event: Event) => event.type === 2)
        .map((event: Event) => ({ name: event.name, date: event.date }));
      const countType2 = nameType2.length;

      setEventType({ type1: countType1, type2: countType2 });
      setEventName({ name1: nameType1, name2: nameType2 });
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  }
  // function to manage the open modal with functions
  const handleOpenModal = (gardener: Gardener) => {
    setSelectedGardener(gardener);
    setOpenModal(true);
    getEventsByGardener(gardener.id);
  };
  // function to check if caution is true or false
  function isValid(caution: boolean) {
    return caution;
  }

  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-9 h-full place-items-center">
      {plotsWithGardeners.map((plot, index) => (
        <button
          onClick={() => plot.gardener && handleOpenModal(plot.gardener)}
          className="bg-secondary-50 text-primary-50 items-center flex justify-around w-full h-full rounded-md"
          key={index}
        >
          {" "}
          {plot.gardener ? (
            <>
              {plot.gardener.lastname} {plot.gardener.firstname}
              <div
                className={`w-3 h-3 rounded-full ${
                  isValid(plot.gardener.caution) ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </>
          ) : (
            <span>Pas de jardinier</span>
          )}
          <h2>{plot.number}</h2>
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

export default Plot;
