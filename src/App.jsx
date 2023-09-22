import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Column from "./components/Column/Column";
import "./App.css";
import Task from "./components/Task/Task";

let columnsRenderDefault = (
  <>
    <Column state="porHacer"></Column>
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
    console.log(tasks);
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
                id={task.id}
                title={task.title}
                notes={task.notes}
                status={task.status}
                subtasks={task.subtasks}
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
      <div className="addTaskHandler">
        <AddTask />
      </div>

      <div className="columnHandler">{columns}</div>
    </>
  );
}

export default App;
