export default function Nav() {
  return (
    <nav className="bg-black text-white p-4 flex items-center fixed relative z-10">
      <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
      <ul className="flex justify-between"></ul>
    </nav>
  );
}
