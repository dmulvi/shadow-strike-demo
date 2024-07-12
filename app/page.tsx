import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        className="relative w-full h-full bg-center bg-cover"
        style={{ backgroundImage: "url('/arena.jpg')", height: "100vh" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <img className="absolute top-20" src="/logo.png" />
          <div className="absolute top-72 w-96">
            <div className="mb-4">
              <input
                type="email"
                placeholder="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded text-center input-opacity"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded text-center input-opacity"
              />
            </div>
            <Link
              href="/signup"
              className="w-full py-2 px-4 text-center inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 motion-reduce:transition-none dark:hover:bg-rose-950 dark:focus:bg-rose-950"
              data-twe-ripple-init
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
