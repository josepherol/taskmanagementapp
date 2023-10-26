import React from "react";
import { MainProvider } from "./MainContext";
import CreateTask from "./CreateTask";
import FilterTask from "./FilterTask";
import FilterSecond from "./FilterSecond";
import SortTask from "./SortTask";
import DisplayTasks from "./DisplayTasks";
import "./App.css";

function App() {
  return (
    <MainProvider>
      <div className="App">
        <h1 className="mt-2">Task Management App</h1>

        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto mt-5">
              <CreateTask />
            </div>

            <div className="col-8 mx-auto">
              <FilterTask />
            </div>

            <div className="col-8 mx-auto">
              <FilterSecond />
            </div>

            <div className="col-8 mx-auto">
              <SortTask />
            </div>

            <div className="col-8 mx-auto ">
              <DisplayTasks />
            </div>
          </div>
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
