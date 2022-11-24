export default function Proyectos() {
  return (
    <>
      <section >
        <div className="hero min-h-max bg-base-200 py-6">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">E-World!</h1>
              <p className="py-6">
                Proyecto individual elaborado como capstone del
                bootcamp de Soy Henry donde podemos consultar todo lo relativo a
                los países y a su información especifica. App construida
                utlizando React, Redux, Node y Sequelize con el objetivo de
                reafirmar y conectar los conceptos aprendidos en la carrera,
                obtener una visión amplia de buenas práctica y practicar el
                workflow de GIT.
              </p>
              <button className="btn btn-primary">Sitio</button>
              <button className="btn btn-primary m-2">Codigo</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">HenryShops!</h1>
              <p className="py-6">
                Proyecto grupal elaborado para el bootcamp de SoyHenry, donde
                nos integramos un grupo de 7 estudiantes para llevar a la
                realidad esta propuesta que integra tecnologías como:
                TypeScript, React.js, Styled-components, HTML, CSS, Postgres,
                Node.js, Redux-toolkit, entre otras. HenryShops tiene como
                finalidad, permitirle a los pequeños comercios crear su propia
                pagina web, llegar de una manera diferente y eficaz a sus
                clientes y manejar de manera optima sus pedidos a traves de
                whatsapp.
              </p>
              <button className="btn btn-primary">Sitio</button>
              <button className="btn btn-primary m-2">Codigo</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
