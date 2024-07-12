import Nav from "../components/nav";
import Fighters from "./fighters";
import { Russo_One } from "next/font/google";
const russo = Russo_One({ subsets: ["latin"], weight: "400" });

export default function Signup() {
  return (
    <div className={russo.className}>
      <Nav />
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div
          className="relative w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/arena.jpg')",
            height: "100vh",
            filter: "brightness(50%)",
          }}
        ></div>
        <Fighters />
      </div>
    </div>
  );
}
