import React, { useContext } from "react";
import { MainContext } from "./MainContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTask() {
  const {
    title,
    setTitle,
    project,
    setProject,
    priority,
    setPriority,
    date,
    setDate,
    process,
    setProcess,
    content,
    setContent,
    handleOlustur,
  } = useContext(MainContext);
  return (
    <>
      <section id="create-task" className="text-start">
        <div class="mb-3 d-flex ">
          <input
            type="text"
            class="form-control me-2"
            id="title"
            placeholder="Başlık Giriniz"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <select
            class="form-select ms-2"
            aria-label="Default select example"
            value={project}
            onChange={(event) => {
              setProject(event.target.value);
            }}
          >
            <option value="" selected disabled>
              Proje Seçiniz
            </option>
            <option value="insaat">İnşaat</option>
            <option value="okul">Okul</option>
            <option value="hastane">Hastane</option>
            <option value="kurum">Kurum</option>
            <option value="idare">İdare</option>
          </select>
        </div>
        <div class="mb-3 d-flex ">
          <select
            class="form-select"
            aria-label="Default select example"
            value={priority}
            onChange={(event) => {
              setPriority(event.target.value);
            }}
          >
            <option value="" selected disabled>
              Öncelik Sırası
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="d-flex">
          <p className="me-3">Bitiş Tarihi Seçiniz:</p>
          <DatePicker selected={date} onChange={(value) => setDate(value)} />
        </div>
        <div class="mb-3 d-flex justify-content-between">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="projehazirlama"
              checked={process === "projehazirlama"}
              onChange={(event) => {
                setProcess(event.target.id);
              }}
            />
            <label class="form-check-label" for="projehazirlama">
              Proje Hazırlama
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="arge"
              checked={process === "arge"}
              onChange={(event) => {
                setProcess(event.target.id);
              }}
            />
            <label class="form-check-label" for="arge">
              Arge
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="tasarim"
              checked={process === "tasarim"}
              onChange={(event) => {
                setProcess(event.target.id);
              }}
            />
            <label class="form-check-label" for="tasarim">
              Tasarım
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="butce"
              checked={process === "butce"}
              onChange={(event) => {
                setProcess(event.target.id);
              }}
            />
            <label class="form-check-label" for="butce">
              Bütçe
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="yonetim"
              checked={process === "yonetim"}
              onChange={(event) => {
                setProcess(event.target.id);
              }}
            />
            <label class="form-check-label" for="yonetim">
              Yönetim
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="sunum"
              checked={process === "sunum"}
              onChange={(event) => {
                setProcess(event.target.id);
              }}
            />
            <label class="form-check-label" for="sunum">
              Sunum
            </label>
          </div>
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            value={content}
            id="content"
            placeholder="Açıklama Giriniz"
            rows="1"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-success w-100"
          value={content}
          onClick={handleOlustur}
        >
          Oluştur
        </button>
      </section>
      <hr />
    </>
  );
}
