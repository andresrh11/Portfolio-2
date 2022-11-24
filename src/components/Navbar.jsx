import logo from "../icons/logop.png";

export default function Navbar() {
  return (
    <header className="py-2 relative bg-gradient-to-b">
      <div className="flex items-center justify-around h-10">
        <nav className="w-36">
          <div className="flex justify-between ">
            <div className="w-7 h-8 inline-block items-center">
              <img src={logo} alt="" />
            </div>
            <a href="" className="flex justify-around text-xl font-extrabold">
              andres.co
            </a>
          </div>
        </nav>
        <nav>
          <ul className="flex justify-around text-xl font-bold">
            <div></div>
            <li className="p-4">
              <a href="">CONTACTO</a>
            </li>
            <li className="p-4">
              <a href="">STACK</a>
            </li>
            <li className="p-4">
              <a href="#proyectos">PROYECTOS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
