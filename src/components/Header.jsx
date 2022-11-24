import img from "../icons/yo.jpg";
export default function Header() {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <h1 className="text-5xl font-bold py-6">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-warning">Descargar CV</button>
            <button className="btn btn-warning m-2">Contactame</button>
          </div>
        </div>
      </div>
    </section>
  );
}
