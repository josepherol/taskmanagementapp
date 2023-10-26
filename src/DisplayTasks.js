import React, { useContext } from "react";
import { MainContext } from "./MainContext";
import TaskCard from "./TaskCard";

export default function DisplayTasks() {
  const { tasks, filterFirst, filterSecond } = useContext(MainContext);

  const filteredTasks =
    filterFirst === "hepsi"
      ? tasks
      : filterFirst === "projehazirlama"
      ? tasks.filter((task) => task.process === "projehazirlama")
      : filterFirst === "arge"
      ? tasks.filter((task) => task.process === "arge")
      : filterFirst === "tasarim"
      ? tasks.filter((task) => task.process === "tasarim")
      : filterFirst === "butce"
      ? tasks.filter((task) => task.process === "butce")
      : filterFirst === "yonetim"
      ? tasks.filter((task) => task.process === "yonetim")
      : filterFirst === "sunum"
      ? tasks.filter((task) => task.process === "sunum")
      : null;

  const doubleFilteredTasks =
    filterSecond === "hepsi"
      ? filteredTasks
      : filterSecond === "tamamlanmis"
      ? filteredTasks.filter(
          (filteredTasks) => filteredTasks.completed === true
        )
      : filteredTasks.filter(
          (filteredTasks) => filteredTasks.completed === false
        );

  return (
    <>
      <section id="display-task">
        {doubleFilteredTasks.map((task, key) => (
          <TaskCard key={key} task={task} />
        ))}
      </section>
    </>
  );
}
