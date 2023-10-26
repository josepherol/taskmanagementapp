import React, { useContext } from "react";
import { MainContext } from "./MainContext";

export default function SortTask() {
  const { prioritySort, setPrioritySort, dateSort, setDateSort } =
    useContext(MainContext);
  return (
    <>
      {" "}
      <section id="sort-task" className="d-flex">
        <select
          class="form-select form-select-sm me-2"
          aria-label="Small select example"
          value={prioritySort}
          onChange={(event) => {
            setPrioritySort(event.target.value);
          }}
        >
          <option value="" selected>
            Öncelik Sırası Seçin
          </option>
          <option value="desc">Öncelik Sırası - Azalan</option>
          <option value="asc">Öncelik Sırası - Artan</option>
        </select>
        <select
          class="form-select form-select-sm ms-2"
          aria-label="Small select example"
          value={dateSort}
          onChange={(event) => {
            setDateSort(event.target.value);
          }}
        >
          <option value="" selected>
            Zamana Göre Sıralama Seçin
          </option>
          <option value="eski">Zamana Göre Sıralama - Önce En Uzak</option>
          <option value="yeni">Zamana Göre Sıralama - Önce En Yakın</option>
        </select>
      </section>
      <hr />
    </>
  );
}
