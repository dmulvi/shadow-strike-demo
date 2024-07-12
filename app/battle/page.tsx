import Nav from "../components/nav";
import BattleScreen from "./BattleScreen";
import { fighters } from "../signup/_fighters";
import { Russo_One, Oswald } from "next/font/google";
const russo = Russo_One({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"] });

export default function Battle() {
  return (
    <div className={russo.className}>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div
          className="relative w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/arena.jpg')",
            height: "100vh",
          }}
        ></div>
        <BattleScreen fighter1={fighters[0]} fighter2={fighters[1]} />
      </div>
    </div>
  );
}
