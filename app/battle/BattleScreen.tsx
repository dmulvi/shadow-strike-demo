"use client";

import { useState } from "react";
import { Fighter } from "../signup/_fighters";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

interface BattleScreenProps {
  fighter1: Fighter;
  fighter2: Fighter;
}

const BattleScreen: React.FC<BattleScreenProps> = ({ fighter1, fighter2 }) => {
  const fighters = {
    "1": fighter1,
    "2": fighter2,
  };
  const [p1HealthPoints, setP1HealthPoints] = useState(fighter1.health);
  const [p2HealthPoints, setP2HealthPoints] = useState(fighter2.health);
  const [p1HealthPercent, setP1HealthPercent] = useState(100);
  const [p2HealthPercent, setP2HealthPercent] = useState(100);

  const [attackLog, setAttackLog] = useState<string[]>([]);

  const handleAttack = (fighter: "1" | "2", attack: number) => {
    const opponent = fighter === "1" ? "2" : "1";

    const currentHealthPoints =
      fighter === "1" ? p2HealthPoints : p1HealthPoints;
    const currentHealth = fighter === "1" ? fighter2.health : fighter1.health;

    const newHealthPoints = Math.max(
      0,
      Math.round(currentHealthPoints - attack)
    );
    const newHealthPercent = Math.round(
      (newHealthPoints / currentHealth) * 100
    );

    const attLog = `${fighters[fighter].name} attacks for ${attack} points`;
    const resLog = `${fighters[opponent].name} health is now ${newHealthPercent}%`;
    setAttackLog((prevAttackLog) => [
      ...prevAttackLog,
      attLog,
      resLog,
      "-----",
    ]);

    if (newHealthPoints === 0) {
      const defeatLog = `${fighters[fighter].name} has defeated ${fighters[opponent].name}`;
      setAttackLog((prevAttackLog) => [...prevAttackLog, defeatLog]);
    }

    if (fighter === "1") {
      setP2HealthPoints(newHealthPoints);
      setP2HealthPercent(newHealthPercent);
    } else {
      setP1HealthPoints(newHealthPoints);
      setP1HealthPercent(newHealthPercent);
    }

    // trigger an auto attack by the computer player
    if (opponent === "2" && newHealthPercent > 0) {
      const attackPower = Math.floor(Math.random() * 51) + 50; // random attack between 50-100
      handleAttack("2", attackPower);
    }
  };

  return (
    <>
      <div className="absolute top-20 left-0 w-full h-full bg-black bg-opacity-50 px-6">
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-stretch">
              <div className="mr-7 text-white text-xl uppercase">
                {fighter1.name}
              </div>
              <div className="w-72 h-8 bg-red-500 rounded overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${p1HealthPercent}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="text-white text-2xl">VS</div>

            <div className="flex items-center">
              <div className="w-72 h-8 bg-red-500 rounded overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${p2HealthPercent}%`,
                  }}
                ></div>
              </div>
              <div className="ml-5 text-white text-xl uppercase">
                {fighter2.name}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="mt-5 w-50 md:w-1/3 cursor-pointer">
            <div className="aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 border rounded relative">
              <img
                className="w-full h-full object-cover object-top md:object-center rounded"
                src="/champions/erebus.jpg"
                alt="Erebus"
              />
              <div
                style={{
                  opacity: (100 - p1HealthPercent) / 200,
                }}
                className="absolute top-0 left-0 w-full h-full bg-rose-800"
              ></div>
            </div>

            <span className="mt-2 w-full flex rounded-md shadow-sm">
              <button
                type="button"
                className="w-full relative rounded-l-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white uppercase ring-1 ring-inset ring-gray-300 hover:bg-blue-800 focus:z-10"
                onClick={() => handleAttack("1", 50)}
              >
                Attack 1
              </button>
              <button
                type="button"
                className="w-full relative -ml-px bg-blue-950 px-3 py-2 text-sm font-semibold text-white uppercase ring-1 ring-inset ring-gray-300 hover:bg-blue-800 focus:z-10"
                onClick={() => handleAttack("1", 70)}
              >
                Attack 2
              </button>
              <button
                type="button"
                className="w-full relative -ml-px rounded-r-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white uppercase ring-1 ring-inset ring-gray-300 hover:bg-blue-800 focus:z-10"
                onClick={() => handleAttack("1", 100)}
              >
                Attack 3
              </button>
            </span>
          </div>

          <div className="bg-black bg-opacity-60 m-4 p-4 rounded w-50 md:w-1/3 border cursor-pointer">
            <h2 className="text-center text-red-800 mb-3">ATTACK LOG</h2>
            {attackLog.map((log, index) => (
              <p key={index} className={`text-white ${fira.className}`}>
                {log}
              </p>
            ))}
          </div>

          <div className="mt-5 w-50 md:w-1/3 cursor-pointer">
            <div className="aspect-w-9 aspect-h-16 md:aspect-w-16 md:aspect-h-9 border rounded relative">
              <img
                className="w-full h-full object-cover object-top md:object-center rounded"
                src="/champions/voraxia.jpg"
                alt="Voraxia"
              />
              <div
                style={{
                  opacity: (100 - p2HealthPercent) / 200,
                }}
                className="absolute top-0 left-0 w-full h-full bg-rose-800"
              ></div>
            </div>
            <div className="flex flex-row"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BattleScreen;
