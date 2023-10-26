import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function FilterTask() {
  const { filterFirst, setFilterFirst } = useContext(MainContext);
  return (
    <>
      <section id="filter-task" className="d-flex justify-content-between">
        <button
          type="button"
          class={`btn btn-success ${
            filterFirst === "hepsi" ? "disabled" : ""
          } `}
          onClick={() => setFilterFirst("hepsi")}
        >
          Hepsi
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterFirst === "projehazirlama" ? "disabled" : ""
          } `}
          onClick={() => setFilterFirst("projehazirlama")}
        >
          Proje Hazırlama
        </button>

        <button
          type="button"
          class={`btn btn-success ${filterFirst === "arge" ? "disabled" : ""} `}
          onClick={() => setFilterFirst("arge")}
        >
          Arge
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterFirst === "tasarim" ? "disabled" : ""
          } `}
          onClick={() => setFilterFirst("tasarim")}
        >
          Tasarım
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterFirst === "butce" ? "disabled" : ""
          } `}
          onClick={() => setFilterFirst("butce")}
        >
          Bütçe
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterFirst === "yonetim" ? "disabled" : ""
          } `}
          onClick={() => setFilterFirst("yonetim")}
        >
          Yönetim
        </button>

        <button
          type="button"
          class={`btn btn-success ${
            filterFirst === "sunum" ? "disabled" : ""
          } `}
          onClick={() => setFilterFirst("sunum")}
        >
          Sunum
        </button>
      </section>
      <hr />
    </>
  );
}
