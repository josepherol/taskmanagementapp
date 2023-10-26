import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("");
  const [process, setProcess] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date());
  const [completed, setCompleted] = useState(false);

  const [filterFirst, setFilterFirst] = useState(() => {
    const savedItem = localStorage.getItem("filterfirst");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "hepsi";
  });

  useEffect(() => {
    localStorage.setItem("filterfirst", JSON.stringify(filterFirst));
  });

  const [filterSecond, setFilterSecond] = useState(() => {
    const savedItem = localStorage.getItem("filtersecond");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "hepsi";
  });

  useEffect(() => {
    localStorage.setItem("filtersecond", JSON.stringify(filterSecond));
  });

  const [tasks, setTasks] = useState(() => {
    const savedItem = localStorage.getItem("tasks");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const [prioritySort, setPrioritySort] = useState(() => {
    const savedItem = localStorage.getItem("prioritySort");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });

  useEffect(() => {
    localStorage.setItem("prioritySort", JSON.stringify(prioritySort));
  });

  useEffect(() => {
    if (prioritySort === "asc") {
      const sortedTasks = [...tasks];
      sortedTasks.sort((a, b) => a.priority - b.priority);
      setTasks(sortedTasks);
    } else if (prioritySort === "desc") {
      const sortedTasks = [...tasks];
      sortedTasks.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks);
    }
  }, [prioritySort]);

  const [dateSort, setDateSort] = useState(() => {
    const savedItem = localStorage.getItem("dateSort");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });

  useEffect(() => {
    localStorage.setItem("dateSort", JSON.stringify(dateSort));
  });

  useEffect(() => {
    if (dateSort === "yeni") {
      const sortedTasks = [...tasks];
      sortedTasks.sort((a, b) => a.timestampt - b.timestampt);
      setTasks(sortedTasks);
    } else if (dateSort === "eski") {
      const sortedTasks = [...tasks];
      sortedTasks.sort((a, b) => b.timestampt - a.timestampt);
      setTasks(sortedTasks);
    }
  }, [dateSort]);

  const handleOlustur = () => {
    const createdTask = [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks.length + 1,
        title: title,
        project: project,
        priority: priority,
        process: process,
        content: content,
        date: date,
        timestampt: date.getTime(),
        completed: completed,
      },
    ];

    setTasks(createdTask);
    setTitle("");
    setProject("");
    setPriority("");
    setProcess("");
    setContent("");
  };

  return (
    <MainContext.Provider
      value={{
        title,
        setTitle,
        project,
        setProject,
        priority,
        setPriority,
        process,
        setProcess,
        content,
        setContent,
        date,
        setDate,
        completed,
        setCompleted,
        filterFirst,
        setFilterFirst,
        filterSecond,
        setFilterSecond,
        tasks,
        setTasks,
        prioritySort,
        setPrioritySort,
        dateSort,
        setDateSort,
        handleOlustur,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
