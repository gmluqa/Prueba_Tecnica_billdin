import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Column from "./components/Column/Column";
import "./App.css";
import Task from "./components/Task/Task";

let columnsRender = (
  <>
    <Column state="porHacer">
      <Task
        title="example"
        notes="example notes"
        subtasks={["subtask1", "subtask2"]}
      ></Task>
    </Column>
    <Column state="enCurso"></Column>
    <Column state="finalizada"></Column>
  </>
);

function App() {
  const [columns, setcolumns] = useState(null);

  let tasks = useSelector(state => state.tasks);

  useEffect(() => {
    tasks = JSON.parse(localStorage.getItem("taskCreated"));
    if (tasks == null) {
      setcolumns(columnsRender);
    }
  }, [tasks]);

  // const asignTasksToColumns = tasks => {
  //   columnsRender = <>test</>;

  //   tasks?.map(element => {
  //     console.log(element.status);
  //     if (element.status === "porHacer") {
  //       return <>test</>;
  //     }
  //   });
  //   console.log("and heres the array!!!");
  // };

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

      <div className="columnHandler">{columns}</div>
    </>
  );
}

export default App;
