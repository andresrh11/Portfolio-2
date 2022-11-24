import logo from "../icons/logop.png";

export default function Navbar() {
  return (
    <div id="home" className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">AndresRH.co</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a>Stack</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
