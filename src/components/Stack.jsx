import "../index.css";
import js from "../icons/js.png";
import react from "../icons/react.png";
import prettier from "../icons/pret.png";
import css from "../icons/css-3.png";
import html from "../icons/html-5.png";
import node from "../icons/node-js.png";
import postgres from "../icons/postgre.png";
import tailwind from "../icons/camion.png";
import { useState } from "react";

export default function Stack() {
  const [contador, setContador] = useState(0);
  setTimeout(() => {
    setContador(1);
  }, [8000]);
  return (
    <section id="stack">
      <h1 className="text-5xl font-bold py-6 text-center items-center content-center">
        Stack
      </h1>
      <div className="w-marquee">
        <div className="marquee">
          <span>
            <div className="py-2 px-2">
              <img
                src={js}
                alt="Js"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />
            </div>
            <div className="column py-2 px-2">
              <img
                src={react}
                alt="React"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />{" "}
            </div>
            <div className="py-2 px-2">
              <img
                src={html}
                alt="html"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />{" "}
            </div>
            <div className="py-2 px-2">
              <img
                src={css}
                alt="css"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />{" "}
            </div>
            <div className="py-2 px-2">
              <img
                src={node}
                alt="node"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />{" "}
            </div>
            <div className="py-2 px-2">
              <img
                src={postgres}
                alt="postgress"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />{" "}
            </div>
            <div className="py-2 px-2">
              <img
                src={prettier}
                alt="prettier"
                className="w-80 h-auto rounded-lg  max-w-auto"
              />{" "}
            </div>
            <div className="py-2 px-2 flex justify-center items-center">
              {" "}
              <img
                src={tailwind}
                alt="prettier"
                className="w-80 h-auto rounded-lg  max-w-auto "
              />{" "}
            </div>
            &nbsp;&nbsp;&nbsp;
          </span>
        </div>
        {contador ? (
          <div className="marquee marquee2">
            <span>
              <div className="py-2 px-2">
                <img
                  src={js}
                  alt="Js"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className=" py-2 px-2">
                <img
                  src={react}
                  alt="React"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className="py-2 px-2">
                <img
                  src={html}
                  alt="html"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className="py-2 px-2">
                <img
                  src={css}
                  alt="css"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className="py-2 px-2">
                <img
                  src={node}
                  alt="node"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className="py-2 px-2">
                <img
                  src={postgres}
                  alt="postgress"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className="py-2 px-2">
                <img
                  src={prettier}
                  alt="prettier"
                  className="w-80 h-auto rounded-lg  max-w-auto"
                />{" "}
              </div>
              <div className="py-2 px-2 flex justify-center items-center">
                <img
                  src={tailwind}
                  alt="prettier"
                  className="w-80 h-auto rounded-lg  max-w-auto "
                />{" "}
              </div>
              &nbsp;&nbsp;&nbsp;
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
