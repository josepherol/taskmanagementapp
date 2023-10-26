import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function FilterSecond() {
  const { filterSecond, setFilterSecond } = useContext(MainContext);
  return (
    <>
      {" "}
      <section id="filter-second" className="d-flex justify-content-between">
        <button
          type="button"
          class={`btn btn-success ${
            filterSecond === "hepsi" ? "disabled" : ""
          } `}
          onClick={() => setFilterSecond("hepsi")}
        >
          Hepsi
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterSecond === "tamamlanmis" ? "disabled" : ""
          } `}
          onClick={() => setFilterSecond("tamamlanmis")}
        >
          Tamamlanmış
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterSecond === "tamamlanmamis" ? "disabled" : ""
          } `}
          onClick={() => setFilterSecond("tamamlanmamis")}
        >
          Tamamlanmamış
        </button>
      </section>
      <hr />
    </>
  );
}
