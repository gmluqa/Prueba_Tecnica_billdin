import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddTask from "./components/AddTask/AddTask";
import Column from "./components/Column/Column";
import "./App.css";
import Task from "./components/Task/Task";

function App() {
  let tasks = useSelector(state => state.tasks);
  console.log(tasks);
  useEffect(() => {
    try {
      tasks = JSON.parse(localStorage.getItem("taskCreated"));
      console.log(tasks);
      console.log("column asign time...");
      asignTasksToColumns(tasks);
    } catch (error) {}
  }, [tasks]);

  let columnsRender = (
    <>
      <Column state="porHacer"></Column>
      <Column state="enCurso"></Column>
      <Column state="finalizada"></Column>
    </>
  );

  const asignTasksToColumns = tasks => {
    return tasks.map((task, index) => {
      <div key={index}>{task}</div>;
    });
  };

  return (
    <>
      {/* TODO: Remove this once ready */}
      <Task
        title="example task"
        notes="example notes"
        status="porHacer"
        subtasks={["example", "example2"]}
      ></Task>
      <div className="addTaskHandler">
        <AddTask />
      </div>

      <div className="columnHandler">{columnsRender}</div>
    </>
  );
}

export default App;
