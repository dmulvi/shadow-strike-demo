"use client";

import { useState } from "react";
import { Fighter, fighters } from "./_fighters";
import { useRouter } from "next/navigation";
import { Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function Fighters() {
  const [selectedFighter, setSelectedFighter] = useState<Fighter | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleFighterClick = (fighter: Fighter) => {
    setSelectedFighter(fighter);
    //setIsModalOpen(true);
  };

  const goToBattle = () => {
    router.push("/battle");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="absolute top-20 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="w-full">
          <h1 className="text-3xl text-center uppercase m-10">
            Select your Champion
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {fighters.map((fighter, index) => (
            <div
              key={index}
              className={`bg-black bg-opacity-80 m-4 rounded shadow-md w-64 md:w-1/5 border cursor-pointer ${
                fighter === selectedFighter
                  ? "border-green-800"
                  : "border-rose-800"
              }`}
              onClick={() => handleFighterClick(fighter)}
            >
              <div className="aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 overflow-hidden">
                <img
                  className={`w-full h-full object-cover object-top md:object-center rounded-t ${
                    fighter === selectedFighter || selectedFighter === null
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                  src={fighter.image}
                  alt={fighter.name}
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-semibold text-gray-300">
                  {fighter.name}
                </h2>
                <p className="text-gray-600">Starting HP: {fighter.health}</p>
                <p className="text-gray-600">
                  Starting Agility: {fighter.agility}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => goToBattle()}
            className={`m-4 bg-rose-500 text-white p-2 rounded ${
              selectedFighter ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!selectedFighter}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
}
