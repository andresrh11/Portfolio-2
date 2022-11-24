import img from "../icons/yo.jpg";
export default function Header() {
  return (
    <section >
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            
            <h1 className="text-5xl font-bold py-6">Holis</h1>
            <p className="py-6">
              <h2>
                {" "}
                Desarrollador Web Front-End, con habilidad en lenguajes y
                herramientas de software. Excelente manejo de tecnologías y
                escritura de código para desarrollar sistemas, proyectos
                innovadores, amigables con el usuario y que aportan eficiencia
                al negocio. Habilidad motivando, educando y gestionando equipos.
                Buen manejo del inglés (B2) y español (nativo).
              </h2>
            </p>
            <p>
              <h2>
                Durante 2 años y medio estuve estudiando Administración de
                empresas, donde aprendí muchos conceptos y habilidades que
                complementan tanto mi trabajo en equipo como mi capacidad de
                toma de decisiones.{" "}
              </h2>
            </p>
            <button className="btn btn-warning">Descargar CV</button>
            <button className="btn btn-warning m-2">Contactame</button>
          </div>
        </div>
      </div>
    </section>
  );
}
