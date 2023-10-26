import React, { useContext } from "react";
import { MainContext } from "./MainContext";

function TaskCard({ task, onEdit, onDelete }) {
  const { completed, setCompleted, tasks, setTasks } = useContext(MainContext);
  const originalDate = new Date(task.date);

  //   const options = {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //     timeZoneName: "short",
  //   };

  //   const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  //     originalDate
  // 10/14/2023, 15:03:40 GMT
  // );

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = originalDate.toLocaleDateString("en-US", options);

  const handleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  return (
    <div className="card mb-2 w-100">
      <div className="card-body">
        <h5 className="card-title">
          {task.title} - {task.id}{" "}
        </h5>
        <p className="card-text">{task.content}</p>
        <p className="card-text">Category: {task.process}</p>
        <p className="card-text">Priority: {task.priority}</p>
        <p className="card-text">Project: {task.project}</p>
        <p className="card-text">Date: {formattedDate}</p>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          // onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
        <button
          className="btn btn-warning"
          onClick={() => handleCompleted(task.id)}
        >
          Tamamlandı
        </button>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title {task.title} / {task.id}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
