import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Column from "./components/Column/Column";
import "./App.css";
import Task from "./components/Task/Task";

let columnsRenderDefault = (
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
    console.log(tasks);
    if (tasks == null) {
      setcolumns(columnsRenderDefault);
    } else {
      let renderedColumns = renderColumns(tasks);
      setcolumns(renderedColumns);
      console.log(renderedColumns); // Use renderedColumns instead of columns
    }
  }, [tasks]);

  const renderColumns = tasks => {
    return (
      <>
        <Column state="porHacer">
          {tasks
            .filter(element => element.status === "porHacer")
            .map(task => (
              <Task
                key={task.id}
                title={task.title}
                notes={task.notes}
                status={task.status}
              ></Task>
            ))}
        </Column>
        <Column state="enCurso">
          {tasks
            .filter(element => element.status === "enCurso")
            .map(task => (
              <Task
                key={task.id}
                title={task.title}
                notes={task.notes}
                status={task.status}
              ></Task>
            ))}
        </Column>
        <Column state="finalizada">
          {tasks
            .filter(element => element.status === "finalizada")
            .map(task => (
              <Task
                key={task.id}
                title={task.title}
                notes={task.notes}
                status={task.status}
              ></Task>
            ))}
        </Column>
      </>
    );
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

      <div className="columnHandler">{columns}</div>
    </>
  );
}

export default App;
