export default function Contact() {
  return (
    <form>
      <h1 className="text-5xl font-bold py-6 text-center">Contacto</h1>
      <div className="hero min-h-md bg-base-200 py-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tu Nombre</span>
              </label>
              <label className="input-group">
                <span>Nombre</span>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tu Apellido</span>
              </label>
              <label className="input-group">
                <span>Apellido</span>
                <input
                  type="text"
                  placeholder="Apellido"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="tu@email.com"
                  className="input input-bordered"
                />
              </label>
            </div>
            <textarea
              className="p-3 h-32 my-4 flex w-80 input-group"
              placeholder="Mensaje"
            ></textarea>
            <button className="btn btn-warning">Enviar</button>
          </div>
        </div>
      </div>
    </form>
  );
}
